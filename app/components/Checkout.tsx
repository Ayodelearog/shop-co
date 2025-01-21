"use client";

import { useState } from "react";
import { useProductStore } from "@/lib/store";
// import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
// import { useToast } from "@/components/ui/Toast"
import getStripe from "@/lib/stripe";
// import { useToast } from "./ui/Toast";

export default function Checkout() {
	const [isLoading, setIsLoading] = useState(false);
	const { cart } = useProductStore();
	
	

	const handleCheckout = async () => {
		setIsLoading(true);

		try {
			const response = await fetch("/api/create-checkout-session", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					items: cart,
					email: "customer@example.com", // In a real app, you'd get this from the user
				}),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const { id: sessionId } = await response.json();

			const stripe = await getStripe();
			const { error } = await stripe!.redirectToCheckout({ sessionId });
			

			if (error) {
				// useToast(`
				//   "error",
				//   toastMessage,
				//   duration: 5000
				// `)
			}
		} catch (error) {
			console.error("Error:", error);
			//   toast({
			//     title: "Error",
			//     description: "Something went wrong. Please try again.",
			//     variant: "destructive",
			//   })
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="w-full px-4 mx-auto mt-10 flex flex-col items-center">
			<h1 className="text-2xl font-bold font-satoshi mb-4">Checkout</h1>
			<Button
				onClick={handleCheckout}
				disabled={isLoading || cart.length === 0}
				className="w-full rounded-full text-white bg-black  text-[14px] font-satoshi font-medium px-[54px] py-6"
			>
				{isLoading ? "Processing..." : "Proceed to Payment"}
			</Button>
		</div>
	);
}
