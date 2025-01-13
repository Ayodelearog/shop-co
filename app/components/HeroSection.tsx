import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
	return (
		<section className="py-10 px-4 bg-gray flex flex-col items-center">
			<div className="flex flex-col gap-5 items-center">
				<h1 className="text-[36px] font-bold font-integral leading-[34px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

				<p className="text-[14px] font-regular font-satoshi leading-[20px]">
					Browse through our diverse range of meticulously crafted garments,
					designed to bring out your individuality and cater to your sense of
					style.
				</p>

				<Link href="#" className={buttonVariants({ variant: "default", className: "w-full rounded-[62px] text-white bg-black py-4 px-[54] text-base font-satoshi font-[400] mt-1" }) }>
					Shop Now
				</Link>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[28px]">

                    <div className="flex flex-col ">
                        <p className="text-[24px] font-bold font-satoshi leading-5 text-black">200+</p>
                        <p className="text-[12px] font-regular font-satoshi leading-[22px] text-black opacity-60">International Brands</p>
                    </div>

                    <div className="w-[2px] bg-black border-r-[2px] border-black opacity-10 h-full"></div>

                    <div className="flex flex-col ">
                        <p className="text-[24px] font-bold font-satoshi leading-5 text-black">200+</p>
                        <p className="text-[12px] font-regular font-satoshi leading-[22px] text-black opacity-60">International Brands+</p>
                    </div>
                    </div>
                </div>
			</div>
		</section>
	);
};

export default HeroSection;
