"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Product, useProductStore } from "@/lib/store";
import ProductCard from "./ui/ProductCard";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const NewArrivals = () => {
	const itemVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const { isLoading, error, fetchProductsByCategory } = useProductStore();

	const [mensCategory, setMensCategory] = useState<Product[]>([]);

	useEffect(() => {
		const fetchMensClothing = async () => {
			const productArr = await fetchProductsByCategory("men's clothing", false);

			
			setMensCategory(productArr);

		
		};

		fetchMensClothing();
	}, [fetchProductsByCategory]);

	if (isLoading) return <div>Loading...</div>;
	// if (error) return <div>Error: {error}</div>;

	return (
		<section className=" w-full">
			<div className="pt-[50px] w-full flex flex-col gap-6 justify-center ">
				<motion.h2
					className="text-[36px] font-bold font-integral leading-[34px] text-center"
					variants={itemVariants}
				>
					NEW ARRIVALS
				</motion.h2>

				<div className="flex items-center gap-4 pl-4 w-full overflow-y-hidden overflow-x-auto py-4 mt-2">
					{mensCategory.map((product) => (
						<Link href={`/products/${product.id}`} key={product.id}>
							<ProductCard product={product} />
						</Link>
					))}
				</div>

				<div className="px-4">
					<div className="w-full mt-1">
						<Link
							href={`/category/men's clothing`}
							className={buttonVariants({
								variant: "outline",
								className:
									"w-full rounded-full text-black bg-transparent py-4 px-[54px] text-base font-satoshi font-[400]  border-black border-opacity-10",
							})}
						>
							View All
						</Link>
					</div>

					<div className="w-full border-t border-black border-opacity-10 mt-10"></div>
				</div>
			</div>
		</section>
	);
};

export default NewArrivals;
