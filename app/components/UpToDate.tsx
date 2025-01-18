// import { div } from "framer-motion/client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const UpToDate = () => {
	return (
		<div className="w-full px-4 mt-[50px] ">
			<div className="w-full bg-black rounded-[20px] flex flex-col gap-8 px-6 py-[34px]">
				<h2 className="text-[24px] font-bold font-integral leading-[36px] text-left  text-white w-full">
					STAY UP TO DATE ABOUT OUR LATEST OFFERS
				</h2>

				<div className="w-full flex flex-col items-center gap-3">
					<div className="relative flex items-center w-full">
						<Image
							src="/ShopCo_icons/email.svg"
							width={20}
							height={20}
							alt="email"
							className="absolute left-4 "
						/>
						<input
							type="email"
							name=""
							id=""
							placeholder="Enter your email address"
							className="w-full rounded-full px-4 pl-12 py-3 outline-none placeholder:text-[14px] placeholder:font-satoshi placeholder:font-medium"
						/>
					</div>

					<Link
						href="#"
						className={buttonVariants({
							variant: "outline",
							className:
								"w-full rounded-full text-black bg-white py-5 px-[54px] text-base font-satoshi font-[400]  border-black border-opacity-10",
						})}
					>
						Subscribe to Newsletter
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UpToDate;
