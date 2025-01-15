"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Product, useProductStore } from "@/lib/store";
import ProductCard from "./ui/ProductCard";



const NewArrivals = () => {
	const itemVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const {
		isLoading,
		error,  
		fetchProductsByCategory,
	} = useProductStore();

    const [mensCategory, setMensCategory] = useState<Product[]>([]);

    useEffect(() => {
        const fetchMensClothing = async () => {
            const productArr = await fetchProductsByCategory("men's clothing", false);
            setMensCategory(productArr);

            console.log(productArr)
        };

        fetchMensClothing();
    }, [fetchProductsByCategory]);

	

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<section className=" w-full">
			<div className="pt-[50px] pb-10 w-full flex flex-col gap-6 justify-center">
				<motion.h2
					className="text-[36px] font-bold font-integral leading-[34px] text-center"
					variants={itemVariants}
				>
					NEW ARRIVALS
				</motion.h2>


                <div className="flex items-center gap-4 pl-4 w-full overflow-y-hidden overflow-x-auto py-4">
                    {
                        mensCategory.map((product) => (

                            <ProductCard key={product.id} product={product} />
                        ))
                    }

                </div>
			</div>
		</section>
	);
};

export default NewArrivals;
