"use client";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product, useProductStore } from "@/lib/store";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import RatingStars from "./ui/RatingStars";
import { Button } from "@/components/ui/button";
import { useToast } from "./ui/Toast";
import UpToDate from "./UpToDate";
import Footer from "./ui/Footer";

interface ProductDetailsProps {
	product: Product;
}

const sizes = [
	{ id: 1, label: "Small" },
	{ id: 2, label: "Medium" },
	{ id: 3, label: "Large" },
	{ id: 4, label: "X-Large" },
];

const ProductDetails = ({ product }: ProductDetailsProps) => {
	const addToCart = useProductStore((state) => state.addToCart);
	const updateCartItemQuantity = useProductStore(
		(state) => state.updateCartItemQuantity
	);
	const [activeId, setActiveId] = useState<number | null>(null);
	const [itemQuantity, setItemQuantity] = useState<number>(1);
	const { showToast } = useToast();

	// const [header, setHeader] = useState("");
	const [categoryLink, setCategoryLink] = useState("");

	useEffect(() => {
		if (product.category.includes("men's")) {
			// setHeader("New Arrivals");
			setCategoryLink("/category/men's clothing");
		} else {
			// setHeader("Top Selling");
			setCategoryLink("/category/electronics");
		}
	}, [product]);

	const handlePillClick = (pillId: number) => {
		setActiveId((prevId) => (prevId === pillId ? null : pillId));
	};

	const handleIncrement = () => {
		setItemQuantity((prevQuantity) => prevQuantity + 1);
	};

	const handleDecrement = () => {
		setItemQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
	};

	const handleAddToCart = () => {
		updateCartItemQuantity(product.id, itemQuantity);
		addToCart({ ...product });
		showToast(`Added 1 item to cart`, "success");
	};

	return (
		<section>
			<div className="w-full px-4 ">
				<Breadcrumb className="pt-5 flex items-center gap-1 border-t border-black border-opacity-10">
					<BreadcrumbList>
						<BreadcrumbItem className="font-satoshi text-[14px] font-normal">
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink href={categoryLink}>Products</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>{product.title.trimEnd()}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<div className="w-full flex justify-center">
					<div className="w-[100%] h-[290px] relative rounded-5 flex items-center justify-center  mt-5">
						<Image
							src={product.image}
							fill
							alt={product.title}
							className="object-contain"
						/>
					</div>
				</div>

				<h2 className="font-integral text-6 leading-[18px] font-bold text-black mt-5 min-w-[250px]">
					{product.title}
				</h2>

				<div className="mt-3 flex items-center gap-4">
					<RatingStars rating={product.rating.count} />{" "}
					<span className="font-satoshi text-[14px] ">
						{product.rating.rate}/5
					</span>
				</div>

				<p className="font-satoshi mt-3 text-6 font-bold text-black">
					${product.price}
					{/* <span className="strikethrough text-opacity-30">$300</span> */}
				</p>

				<p className="font-satoshi mt-5 text-[14px] font-normal text-opacity-60 text-black leading-5">
					{product.description}
				</p>

				<div className="w-full mt-6 border-t border-black border-opacity-10"></div>

				<div className="w-full mt-6 flex flex-col gap-4 items-start">
					<p className="font-satoshi text-[14px] font-normal text-opacity-60 text-black ">
						Choose Size
					</p>

					<div className="w-full flex items-center flex-wrap gap-2">
						{sizes.map((size) => (
							<div
								key={size.id}
								onClick={() => handlePillClick(size.id)}
								className={`flex items-center justify-center rounded-full py-2.5 px-5 transition-colors duration-500 ease-in-out font-satoshi text-[14px] font-normal text-opacity-60 text-black select-none ${
									activeId === size.id
										? "bg-black text-white text-opacity-100"
										: "bg-gray"
								}`}
							>
								{size.label}
							</div>
						))}
					</div>
				</div>

				<div className="w-full mt-6 border-t border-black border-opacity-10"></div>

				<div className="w-full mt-6 flex gap-3 items-center">
					<div className="w-fit flex items-center gap-4 bg-gray px-4 py-3 rounded-full">
						<span
							onClick={handleDecrement}
							className="w-5 h-5 relative cursor-pointer "
						>
							<Image
								src="/ShopCo_icons/minus.svg"
								fill
								alt="minus icon"
								className="object-contain"
							/>
						</span>

						<span className="font-satoshi font-medium text-[14px]">
							{itemQuantity}
						</span>

						<span
							onClick={handleIncrement}
							className="w-5 h-5 relative cursor-pointer "
						>
							<Image
								src="/ShopCo_icons/plus.svg"
								fill
								alt="olus icon"
								className="object-contain"
							/>
						</span>
					</div>

					<div className="w-full  ">
						<Button
							onClick={handleAddToCart}
							variant="outline"
							className="w-full rounded-full text-white bg-black  text-[14px] font-satoshi font-medium px-[54px] py-6"
						>
							Add to Cart
						</Button>
					</div>
				</div>

				<div className="w-full mt-6 border-t border-black border-opacity-10"></div>
			</div>

			<div className="w-full mt-[50px]">
				<UpToDate />
				<Footer />
			</div>
		</section>
	);
};

export default ProductDetails;
