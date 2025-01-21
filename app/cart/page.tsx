"use client";
import { useProductStore, Product } from "@/lib/store";
import Link from "next/link";
import ProductCard from "../components/ui/ProductCard";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import UpToDate from "../components/UpToDate";
import Footer from "../components/ui/Footer";
import { useEffect, useState } from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CartCardProps {
	product: Product;
}

export default function Cart() {
	const { cart } = useProductStore();
	const deliveryFee = 15;

	// Calculate the subtotal
	const subtotal = cart.reduce(
		(acc, product) => acc + product.price * product.quantity,
		0
	);

	// Calculate the total
	const total = subtotal + deliveryFee;

	return (
		<section className="relative">
			<div className="w-full px-4">
				<Breadcrumb className="pt-5 flex items-center gap-1 border-t border-black border-opacity-10">
					<BreadcrumbList>
						<BreadcrumbItem className="font-satoshi text-[14px] font-normal">
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Cart</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<h1 className="font-integral text-8 font-bold text-black mt-2 ">
					YOUR CART
				</h1>

				<div className="w-full p-3 rounded-[20px] border flex flex-col gap-2 border-black border-opacity-10 mt-5 max-h-[calc(3*100px+2*8px)] overflow-y-auto">
					{cart.length > 0 ? (
						cart.map((product) => (
							<CartCard product={product} key={product.id} />
						))
					) : (
						<p>Cart is empty.</p>
					)}
				</div>

				<div className="w-full p-3 rounded-[20px] border flex flex-col gap-4 border-black border-opacity-10 mt-5">
					<h2 className="font-satoshi text-5 font-bold text-black">
						Order Summary
					</h2>

					<div className="w-full flex flex-col gap-5 items-center">
						<div className="w-full flex items-center justify-between">
							<p className="font-satoshi text-base font-normal text-black text-opacity-60">
								Subtotal
							</p>
							<p className="font-satoshi text-base font-bold text-black">
								${subtotal.toFixed(2)}
							</p>
						</div>
						<div className="w-full flex items-center justify-between">
							<p className="font-satoshi text-base font-normal text-black text-opacity-60">
								Delivery Fee
							</p>
							<p className="font-satoshi text-base font-bold text-black">
								${deliveryFee.toFixed(2)}
							</p>
						</div>

						<div className="w-full mt-6 border-t border-black border-opacity-10"></div>

						<div className="w-full flex items-center justify-between">
							<p className="font-satoshi text-base font-normal text-black text-opacity-100">
								Total
							</p>
							<p className="font-satoshi text-base font-bold text-black">
								${total.toFixed(2)}
							</p>
						</div>
					</div>

					{/* promo code */}
					<div className="w-full flex items-center justify-between gap-1">
						<div className="w-fit relative flex items-center">
							<Image
								src="/ShopCo_icons/tag.svg"
								width={20}
								height={20}
								alt="tag icon"
								className="absolute left-4 "
							/>
							<input
								type="text"
								name=""
								id=""
								placeholder="Add promo code"
								className="bg-gray placeholder:font-satoshi placeholder:text-3.5 px-4 pl-[46px] py-3 outline-none placeholder:font-normal placeholder:text-black placeholder:text-opacity-40 rounded-[62px]"
							/>
						</div>

						<div className="w-full  ">
							<Button
								// onClick={}
								variant="default"
								className="w-full rounded-[62px] text-white bg-black  text-[14px] font-satoshi font-medium px-[26px] py-6"
							>
								Apply
								<Image
									src="/ShopCo_icons/arrow-right-white.svg"
									width={20}
									height={20}
									alt="arrow right icon"
									className="absolute left-4 "
								/>
							</Button>
						</div>
					</div>

					{/* checkout  */}
					<div className="w-full  ">
						<Button
							// onClick={}
							variant="default"
							className="w-full rounded-[62px] text-white bg-black  text-[14px] font-satoshi font-medium px-[26px] py-6 flex items-center gap-3"
						>
							Go to Checkout
							<Image
								src="/ShopCo_icons/arrow-right-white.svg"
								width={20}
								height={20}
								alt="arrow right icon"
								className=" "
							/>
						</Button>
					</div>
				</div>
			</div>

			<div className="w-full mt-[50px]">
				<UpToDate />
				<Footer />
			</div>
		</section>
	);
}

const CartCard = ({ product }: CartCardProps) => {
	const [itemQuantity, setItemQuantity] = useState<number>(1);
	const { removeFromCart } = useProductStore();

	const handleIncrement = () => {
		setItemQuantity((prevQuantity) => prevQuantity + 1);
	};

	const handleDecrement = () => {
		setItemQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
	};

	return (
		<div className="w-full flex items-center gap-[14px] border border-black border-opacity-10 px-3 py-1.5 rounded-[12px]">
			<Image
				src={product.image}
				width={70}
				height={100}
				alt="product image"
				className="rounded-[9px]"
			/>

			<div className="w-full h-full flex flex-col justify-between gap-2">
				<div className="w-full flex items-start gap-4">
					<h3 className="font-satoshi text-base font-bold leading-5 line-clamp-2">
						{product.title}
					</h3>
					<Image
						src="/ShopCo_icons/delete.svg"
						width={20}
						height={20}
						alt="delete icon"
						onClick={() => removeFromCart(product.id)}
					/>
				</div>

				<div className="w-full h-full flex items-end justify-between">
					<p className="text-[16px] font-satoshi font-bold text-black">
						${product.price}
					</p>

					<div className="w-fit flex items-center gap-4 bg-gray px-4 py-2 rounded-full">
						<span
							onClick={handleDecrement}
							className="w-4 h-4 relative cursor-pointer "
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
							className="w-4 h-4 relative cursor-pointer "
						>
							<Image
								src="/ShopCo_icons/plus.svg"
								fill
								alt="plus icon"
								className="object-contain"
							/>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
