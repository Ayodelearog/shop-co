"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const DressStyle = () => {
	const cards = [
		{ id: 1, label: "Casual", image: "/ShopCo_images/casual.png" },
		{ id: 2, label: "Formal", image: "/ShopCo_images/formal.png" },
		{ id: 3, label: "Party", image: "/ShopCo_images/party.png" },
		{ id: 4, label: "Gym", image: "/ShopCo_images/gym.png" },
	];

	return (
		<section className="w-full px-4 mt-[50px]">
			<div className="rounded-[20px] bg-gray pt-10 pb-6">
				<motion.h2
					className="text-[36px] font-bold font-integral leading-[36px] text-center mb-10"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					BROWSE BY DRESS STYLE
				</motion.h2>

          <div className="w-full flex flex-col items-center gap-4 px-4">

					{cards.map((card) => (
							<div
								key={card.id}
								className=" w-full h-[190px] rounded-[24px] flex justify-center items-center relative"
							>
								<p className="absolute z-[2] top-4 left-6 font-satoshi text-[24px] font-bold">
									{card.label}
								</p>
								<Image
									src={card.image}
									fill
									// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									alt={card.label}
									className="object-cover rounded-[24px]"
								/>
							</div>
						)
					)}
          </div>
				

				
			</div>
		</section>
	);
};

export default DressStyle;
