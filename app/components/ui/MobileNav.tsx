"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Product, useProductStore } from "@/lib/store";

export function MobileNav() {
	const [isSearchVisible, setIsSearchVisible] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<Product[] | []>([]);
	const { allProducts, fetchProducts } = useProductStore();
	const searchInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	useEffect(() => {
		if (isSearchVisible && searchInputRef.current) {
			searchInputRef.current.focus();
		}
	}, [isSearchVisible]);

	const toggleSearch = () => {
		setIsSearchVisible(!isSearchVisible);
	};

	const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value.toLowerCase();
		console.log(query);
		setSearchQuery(query);

		// Filter products based on query

		const filteredResults = allProducts.filter((product) => {
			return product.title.toLowerCase().includes(query);
		});
		setSearchResults(filteredResults);
	};

	return (
		<nav className="flex items-center justify-between px-4 py-5 bg-white desktop:hidden">
			<AnimatePresence>
				{!isSearchVisible && (
					<motion.div
						className="flex items-center gap-4"
						initial={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "-100%" }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
					>
						{/* Hamburger Menu */}
						<Sheet>
							<SheetTrigger asChild>
								<button className="relative" aria-label="Open menu">
									<Image
										src="/ShopCo_icons/hamburger.svg"
										width={24}
										height={24}
										priority
										alt="hamburger menu"
										className="object-contain"
									/>
								</button>
							</SheetTrigger>
							<SheetContent
								side="left"
								className="w-[250px] sm:w-[300px] bg-white"
							>
								<div className="py-4">
									<h2 className="text-lg font-bold mb-4">Menu</h2>
									<ul className="space-y-2 text-satoshi font-normal text-sm text-black">
										<li>
											<Link href="/" className="block py-2 hover:text-gray-600">
												Home
											</Link>
										</li>
										<li>
											<Link
												href="/products"
												className="block py-2 hover:text-gray-600"
											>
												Products
											</Link>
										</li>
										<li>
											<Link
												href="/cart"
												className="block py-2 hover:text-gray-600"
											>
												Cart
											</Link>
										</li>
										<li>
											<Link
												href="/category"
												className="block py-2 hover:text-gray-600"
											>
												Category
											</Link>
										</li>
									</ul>
								</div>
							</SheetContent>
						</Sheet>

						{/* Logo */}
						<Link href="/" className="p-0">
							<p className="text-[25px] font-bold uppercase font-integral pb-1">
								SHOP.CO
							</p>
						</Link>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Search Bar */}
			<motion.div
				className="flex-1 px-4 relative"
				initial={{ width: 0, opacity: 0, display: "hidden" }}
				animate={{
					width: isSearchVisible ? "100%" : 0,
					opacity: isSearchVisible ? 1 : 0,
				}}
				exit={{ width: 0, opacity: 0 }}
				transition={{
					width: { duration: 0.5, ease: "easeInOut" },
					opacity: { duration: 0.5, ease: "easeInOut" },
				}}
				style={{
					pointerEvents: isSearchVisible ? "auto" : "none",
				}}
			>
				<input
					type="search"
					placeholder="Search..."
					value={searchQuery}
					onChange={handleSearch}
					ref={searchInputRef}
					className="border border-black rounded-xl w-full px-2 py-1 outline-none"
				/>
				{/* Search Results */}
				{searchQuery && (
					<div className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-1 rounded-md max-h-40 overflow-y-auto z-10">
						{searchResults.length > 0 ? (
							searchResults.map((product) => (
								<Link
									key={product.id}
									href={`/products/${product.id}`}
									className=" "
								>
									<div className="px-2 py-2 w-full flex items-center gap-3 text-sm font-satoshi font-normal leading-4 active:bg-gray">
										<Image
											src={product.image}
											width={40}
											height={40}
											alt="product image"
										/>

										{product.title}
									</div>
								</Link>
							))
						) : (
							<p className="px-4 py-2 text-gray-500">No results found</p>
						)}
					</div>
				)}
			</motion.div>

			{/* Right Icons */}
			<div className="flex items-center gap-3">
				<motion.button
					className="relative w-6 h-6"
					aria-label="Search"
					onClick={toggleSearch}
					animate={{
						rotate: isSearchVisible ? 45 : 0,
					}}
					transition={{ duration: 0.2 }}
				>
					<Image
						src="/ShopCo_icons/search.svg"
						fill={true}
						alt="Search icon"
						className="object-contain"
					/>
				</motion.button>
				<Link href="/cart" className="relative w-6 h-6" aria-label="Cart">
					<Image
						src="/ShopCo_icons/cart.svg"
						fill={true}
						alt="cart icon"
						className="object-contain"
					/>
				</Link>
				<button className="relative w-6 h-6" aria-label="Account">
					<Image
						src="/ShopCo_icons/accounts.svg"
						fill={true}
						alt="accounts icon"
						className="object-contain"
					/>
				</button>
			</div>
		</nav>
	);
}
