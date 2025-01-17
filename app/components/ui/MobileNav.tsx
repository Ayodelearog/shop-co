"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNav() {
	const [isSearchVisible, setIsSearchVisible] = useState(false);

	const toggleSearch = () => {
		setIsSearchVisible(!isSearchVisible);
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
						transition={{ duration: 0.5, ease: "spring" }}
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
							<SheetContent side="left" className="w-[250px] sm:w-[300px] bg-white">
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
												href="/about"
												className="block py-2 hover:text-gray-600"
											>
												About
											</Link>
										</li>
										<li>
											<Link
												href="/contact"
												className="block py-2 hover:text-gray-600"
											>
												Contact
											</Link>
										</li>
									</ul>
								</div>
							</SheetContent>
						</Sheet>

						{/* Logo */}
						<Link href="/">
							<p className="text-xl font-bold uppercase font-integral  flex items-center justify-center">
								SHOP.CO
							</p>
						</Link>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Search Bar */}
			<motion.div
				className="flex-1 px-4"
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
					className="border border-black rounded-xl w-full px-2 py-1 outline-none"
				/>
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
				<button className="relative w-6 h-6" aria-label="Cart">
					<Image
						src="/ShopCo_icons/cart.svg"
						fill={true}
						alt="cart icon"
						className="object-contain"
					/>
				</button>
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
