import React from "react";
import Image from "next/image";
import { Product } from "@/lib/store";
import RatingStars from "./RatingStars";



interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	console.log(product);
	return (
		<div className="w-[198px]  flex flex-col gap-[10px]">
			<div className="w-[198px] h-[200px] relative rounded-[14px]">
				<Image
					src={product.image}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					alt="=shirt"
					className="object-contain "
				/>
			</div>
			<div>
				<h3 className="text-5 font-satoshi font-bold leading-5">
					{product.title}{" "}
				</h3>

				<div className="flex items-center gap-3">
                <RatingStars rating={product.rating.rate} />
					<span className="text-[14px] font-satoshi font-regular">4.5/5</span>
				</div>
				<p className="text-6 font-satoshi font-bold">${product.price}</p>
			</div>
		</div>
	);
};

export default ProductCard;
