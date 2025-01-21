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

import Image  from "next/image";

export default function ProductPageComp() {
	const { fetchProducts, allProducts } = useProductStore();
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	// Calculate the index range for the current page
	const indexOfLastProduct = currentPage * itemsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

	// Slice the products for the current page
	const currentProducts = allProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	// Handle page change
	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	// Calculate total pages
	const totalPages = Math.ceil(allProducts.length / itemsPerPage);

	return (
		<section className="relative">
			<div className="w-full px-4">
				<Breadcrumb className="pt-5 flex items-center gap-1 border-t border-black border-opacity-10">
					<BreadcrumbList>
						<BreadcrumbItem className="font-satoshi text-[14px] font-normal">
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						{/* <BreadcrumbItem>
							<BreadcrumbLink href="/category">Category</BreadcrumbLink>
						</BreadcrumbItem> */}
						{/* <BreadcrumbSeparator /> */}
						<BreadcrumbItem>
							<BreadcrumbPage>Products</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<div className="w-full mt-[30px] overflow-hidden grid grid-cols-2 gap-8 justify-center">
					{currentProducts.map((product: Product) => (
						<div key={product.id} className="w-full">
							<Link href={`/products/${product.id}`}>
								<ProductCard product={product} />
							</Link>
						</div>
					))}
				</div>

                <div className="w-full mt-6 border-t border-black border-opacity-10"></div>

				{/* ShadCN Pagination component */}

				<div className="flex justify-center gap-2 mt-6">
					{/* Prev Button */}
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="px-2.5 py-2 border border-gray rounded-[8px] text-3 font-satoshi font-medium relative flex items-center gap-2 transition-colors duration-300 ease-in-out active:bg-gray"
					>
                        <Image src="/ShopCo_icons/arrow-left.svg" width={16} height={16} alt="left arrow" />
						Prev
					</button>

					{/* Page Numbers */}
					<div className="flex items-center space-x-2">
						{Array.from({ length: totalPages }, (_, index) => index + 1).map(
							(pageNumber) => (
								<button
									key={pageNumber}
									onClick={() => handlePageChange(pageNumber)}
									className={`min-w-[28px] px-3 py-1.5 text-3 rounded-[8px] font-satoshi font-medium transition-colors duration-300 ease-in-out ${
										pageNumber === currentPage
											? "bg-gray bg-opacity-[6] text-black "
											: "text-black text-opacity-50"
									}`}
								>
									{pageNumber}
								</button>
							)
						)}
					</div>

					{/* Next Button */}
					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="px-2.5 py-2 border border-gray rounded-[8px] text-3 font-satoshi font-medium relative flex items-center gap-2 transition-colors duration-300 ease-in-out active:bg-gray"
					>
						Next
                        <Image src="/ShopCo_icons/arrow-right.svg" width={16} height={16} alt="right arrow" />
					</button>
				</div>

				
			</div>

			<div className="w-full mt-[50px]">
				<UpToDate />
				<Footer />
			</div>
		</section>
	);
}
