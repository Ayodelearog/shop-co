"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useProductStore } from "@/lib/store";

function OrderConfirmationContent() {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const searchParams = useSearchParams();
	const sessionId = searchParams.get("session_id");
	const { clearCart } = useProductStore();

	useEffect(() => {
		if (sessionId) {
			// Simulate order verification
			setTimeout(() => {
				setIsLoading(false);
				clearCart(); // Clear the cart after successful payment
			}, 2000);
		} else {
			setError("No session ID found. The order might not have been completed.");
			setIsLoading(false);
		}
	}, [sessionId, clearCart]);

	if (isLoading) {
		return (
			<div className=" w-full px-4 font-satoshi text-5 font-medium">
				Loading order confirmation...
			</div>
		);
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className="w-full px-4 mx-auto mt-10 text-center">
			<h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
			<p className="mb-4 font-satoshi text-base font-normal text-black text-opacity-60">
				Thank you for your purchase. Your order has been received and is being
				processed.
			</p>
			<Button
				asChild
				className="w-full rounded-full text-white bg-black  text-[14px] font-satoshi font-medium px-[54px] py-6"
			>
				<Link href="/">Continue Shopping</Link>
			</Button>
		</div>
	);
}

export default function OrderConfirmation() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<OrderConfirmationContent />
		</Suspense>
	);
}
