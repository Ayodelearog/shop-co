"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const playTone = () => {
	const audioContext = new (window.AudioContext ||
		(window as typeof window & { webkitAudioContext: typeof AudioContext })
			.webkitAudioContext)();

	const oscillator = audioContext.createOscillator();
	oscillator.type = "sine"; // Tone type: sine, square, triangle, or sawtooth
	oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Frequency in Hz (A4 note)
	oscillator.connect(audioContext.destination);
	oscillator.start();
	oscillator.stop(audioContext.currentTime + 0.2); // Play for 0.2 seconds
};

const handleClick = () => {
	// Trigger vibration
	if (navigator.vibrate) {
		navigator.vibrate(200); // Vibrate for 200ms
	}

	// Play tone
	playTone();
};

const HeroSection = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const heroImageVariants = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
	};

	const twinkleVariants = {
		initial: {},
		twinkle: {
			opacity: [1, 0.5, 1],
			scale: [1, 1.2, 1],
			transition: {
				duration: 2,
				ease: "easeInOut",
				times: [0, 0.5, 1],
				repeat: Infinity,
				repeatType: "reverse" as const,
			},
		},
	};
	const twinkleVariantsFast = {
		initial: {},
		twinkle: {
			opacity: [1, 0.5, 1],
			scale: [1, 1.2, 1],
			transition: {
				duration: 1,
				ease: "easeInOut",
				times: [0, 0.5, 1],
				repeat: Infinity,
				repeatType: "reverse" as const,
			},
		},
	};

	return (
		<section className="bg-gray">
			{/* mobile */}
			<div>
				{/* Staggered Content */}
				<motion.div
					className="flex flex-col gap-5 items-center pt-10 px-4"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.h1
						className="text-[36px] font-bold font-integral leading-[34px] text-left"
						variants={itemVariants}
					>
						FIND CLOTHES THAT MATCHES YOUR STYLE
					</motion.h1>

					<motion.p
						className="text-[14px] font-regular font-satoshi leading-[20px] text-left"
						variants={itemVariants}
					>
						Browse through our diverse range of meticulously crafted garments,
						designed to bring out your individuality and cater to your sense of
						style.
					</motion.p>

					<motion.div variants={itemVariants} className="w-full">
						<Link
							href="/category/men's clothing"
							className={buttonVariants({
								variant: "default",
								className:
									"w-full rounded-full text-white bg-black py-5 px-[54px] text-base font-satoshi font-[400] mt-1",
							})}
							onClick={handleClick}
						>
							Shop Now
						</Link>
					</motion.div>

					<motion.div
						className="flex flex-col gap-3 items-center justify-between"
						variants={itemVariants}
					>
						{/* Stats */}
						<div className="flex items-center gap-[28px]">
							<div className="flex flex-col items-center">
								<p className="text-[24px] font-bold font-satoshi leading-5 text-black">
									200+
								</p>
								<p className="text-[12px] font-regular font-satoshi leading-[22px] text-black opacity-60 text-center">
									International Brands
								</p>
							</div>

							<div className="w-[1px] h-[52px] bg-black opacity-10"></div>

							<div className="flex flex-col items-center">
								<p className="text-[24px] font-bold font-satoshi leading-5 text-black">
									2,000+
								</p>
								<p className="text-[12px] font-regular font-satoshi leading-[22px] text-black opacity-60 text-center">
									High-Quality Products
								</p>
							</div>
						</div>

						<div className="flex flex-col items-center">
							<p className="text-[24px] font-bold font-satoshi leading-5 text-black">
								30,000+
							</p>
							<p className="text-[12px] font-regular font-satoshi leading-[22px] text-black opacity-60 text-center">
								Happy Customers
							</p>
						</div>
					</motion.div>
				</motion.div>

				{/* Hero Image */}
				<motion.div
					className="relative w-full h-[448px]"
					variants={heroImageVariants}
					initial="hidden"
					animate="visible"
				>
					<Image
						src="/ShopCo_images/hero-img-mobile.png"
						fill
						alt="hero image"
						className="object-cover"
					/>

					<motion.div
						initial="initial"
						variants={twinkleVariants}
						animate="twinkle"
						className="absolute w-[76px] h-[76px] right-[21px] top-[40px]"
					>
						<Image
							src="/ShopCo_images/star.png"
							fill
							alt="big star"
							className="object-contain"
						/>
					</motion.div>

					<motion.div
						variants={twinkleVariantsFast}
						initial="initial"
						animate="twinkle"
						className="absolute w-[44px] h-[44px] left-[27px] top-[137px]"
					>
						<Image
							src="/ShopCo_images/star.png"
							fill
							alt="small star"
							className="object-contain"
						/>
					</motion.div>
				</motion.div>

				{/* Logos Section */}
				<motion.div
					className="w-full px-4 py-10 flex flex-col gap-[2px] items-center relative bg-black"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.div
						className="w-full flex items-center justify-center gap-8"
						variants={itemVariants}
					>
						<div className="relative w-[117px] h-[10vw]">
							<Image
								src="/ShopCo_images/versace.png"
								fill
								alt="versace"
								className="object-contain"
							/>
						</div>

						<div className="relative w-[63px] h-[10vw]">
							<Image
								src="/ShopCo_images/zara.png"
								fill
								alt="zara"
								className="object-contain"
							/>
						</div>

						<div className="relative w-[109px] h-[10vw]">
							<Image
								src="/ShopCo_images/gucci.png"
								fill
								alt="gucci"
								className="object-contain"
							/>
						</div>
					</motion.div>

					<motion.div
						className="w-full flex items-center justify-center gap-8"
						variants={itemVariants}
					>
						<div className="relative w-[127px] h-[10vw]">
							<Image
								src="/ShopCo_images/prada.png"
								fill
								alt="prada"
								className="object-contain"
							/>
						</div>
						<div className="relative w-[135px] h-[10vw]">
							<Image
								src="/ShopCo_images/calvin-klein.png"
								fill
								alt="calvin klein"
								className="object-contain"
							/>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
