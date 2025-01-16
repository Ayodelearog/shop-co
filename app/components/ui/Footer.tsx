import React from "react";
import Image from "next/image";
import SocialIcon from "./SocialIcon";
import Link from "next/link";

// const footerLinks = [
//     {
//         title: "company",
//         links: {
//             About: "#",
//             Features: "#",
//             Works: "#",
//             Career: "#",

//         }
//     },
//     {
//         title: "help",
//         links: {
//             Customer_Support: "#",
//             Delivery_Details: "#",
//             Terms_"&"_Conditions: "#",
//             Career: "#",

//         }
//     },
// ]

const Footer = () => {
	return (
		<section className="w-full bg-gray pt-8 pb-[80px] px-4">
			<div className="flex flex-col gap-[14px]">
				<h2 className="text-[28px] font-bold font-integral leading-[36px] text-left  text-black w-full">
					shop.co
				</h2>
				<p className="text-[14px] font-normal font-satoshi leading-[20px] text-left text-black text-opacity-60 "></p>
			</div>

			<div className="flex items-center gap-3 ">
				<div className="w-7 h-7 rounded-full bg-white border border-black border-opacity-20 relative flex items-center justify-center hover:bg-gray hover:border-opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
					<SocialIcon name="twitter" color="black" />
				</div>
				<div className="w-7 h-7 rounded-full bg-white border border-black border-opacity-20 relative flex items-center justify-center hover:bg-gray hover:border-opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
					<SocialIcon name="facebook" color="black" />
				</div>
				<div className="w-7 h-7 rounded-full bg-white border border-black border-opacity-20 relative flex items-center justify-center hover:bg-gray hover:border-opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
					<SocialIcon name="instagram" color="black" />
				</div>
				<div className="w-7 h-7 rounded-full bg-white border border-black border-opacity-20 relative flex items-center justify-center hover:bg-gray hover:border-opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
					<SocialIcon name="github" color="black" />
				</div>
			</div>

			<div className="grid w-full grid-rows-2 grid-cols-2 gap-6  mt-6">
				<div className="w-full flex flex-col items-start gap-4">
					<h4 className="text-[14px] font-satoshi leading-[18px] text-black font-medium tracking-[3px]">
						COMPANY
					</h4>

					<div className="text-[14px] font-satoshi leading-4 text-black text-opacity-60 font-normal flex flex-col gap-2">
						<Link href="#">About</Link>
						<Link href="#">Features</Link>
						<Link href="#">Works</Link>
						<Link href="#">Career</Link>
					</div>
				</div>
				<div className="w-full flex flex-col items-start gap-4">
					<h4 className="text-[14px] font-satoshi leading-[18px] text-black font-medium tracking-[3px]">
						COMPANY
					</h4>

					<div className="text-[14px] font-satoshi leading-4 text-black text-opacity-60 font-normal flex flex-col gap-2">
						<Link href="#">About</Link>
						<Link href="#">Features</Link>
						<Link href="#">Works</Link>
						<Link href="#">Career</Link>
					</div>
				</div>
				<div className="w-full flex flex-col items-start gap-4">
					<h4 className="text-[14px] font-satoshi leading-[18px] text-black font-medium tracking-[3px]">
						COMPANY
					</h4>

					<div className="text-[14px] font-satoshi leading-4 text-black text-opacity-60 font-normal flex flex-col gap-2">
						<Link href="#">About</Link>
						<Link href="#">Features</Link>
						<Link href="#">Works</Link>
						<Link href="#">Career</Link>
					</div>
				</div>
				<div className="w-full flex flex-col items-start gap-4">
					<h4 className="text-[14px] font-satoshi leading-[18px] text-black font-medium tracking-[3px]">
						COMPANY
					</h4>

					<div className="text-[14px] font-satoshi leading-4 text-black text-opacity-60 font-normal flex flex-col gap-2">
						<Link href="#">About</Link>
						<Link href="#">Features</Link>
						<Link href="#">Works</Link>
						<Link href="#">Career</Link>
					</div>
				</div>
			</div>

			<div className="w-full border border-black border-opacity-10 mt-10"></div>

			<div className="mt-4 w-full flex flex-col gap-4 items-center">
				<small className="font-satoshi text-[14px] font-medium text-black text-opacity-60">
					Shop.co © 2000-2023, All Rights Reserved
				</small>

				<div className="flex items-center gap-[10px] ">
					<div className="relative w-10 h-[26px]">
						<Image
							src="/ShopCo_images/visa.png"
							fill
							alt="visa logo"
							className="object-cover"
						/>
					</div>
					<div className="relative w-10 h-[26px]">
						<Image
							src="/ShopCo_images/mastercard.png"
							fill
							alt="mastercard logo"
							className="object-cover"
						/>
					</div>
					<div className="relative w-10 h-[26px]">
						<Image
							src="/ShopCo_images/paypal.png"
							fill
							alt="paypal logo"
							className="object-cover"
						/>
					</div>
					<div className="relative w-10 h-[26px]">
						<Image
							src="/ShopCo_images/applepay.png"
							fill
							alt="applepay logo"
							className="object-cover"
						/>
					</div>
					<div className="relative w-10 h-[26px]">
						<Image
							src="/ShopCo_images/googlePay.png"
							fill
							alt="googlePay logo"
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
