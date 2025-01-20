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
import { useEffect } from "react";

export default function ProductPageComp() {
	const { fetchProducts, allProducts } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, []);

	console.log(allProducts);

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
					{allProducts.map((product: Product) => (
						<div key={product.id} className="w-full">
							<Link href={`/products/${product.id}`}>
								<ProductCard product={product} />
							</Link>
						</div>
					))}
				</div>

				<div className="w-full mt-6 border-t border-black border-opacity-10"></div>
			</div>

			<div className="w-full mt-[50px]">
				<UpToDate />
				<Footer />
			</div>
		</section>
	);
}
