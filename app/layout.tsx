import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MobileNav } from "./components/ui/MobileNav";
import { ToastProvider } from "./components/ui/Toast";

const integralCF = localFont({
	src: [
		{
			path: "../public/fonts/Integral-CF/Demo_Fonts/Fontspring-DEMO-integralcf-regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/Integral-CF/Demo_Fonts/Fontspring-DEMO-integralcf-medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/Integral-CF/Demo_Fonts/Fontspring-DEMO-integralcf-bold.otf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-integral-cf",
	display: "swap",
});

const satoshi = localFont({
	src: [
		{
			path: "../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-satoshi",
	display: "swap",
});

export const metadata: Metadata = {
	title: "SHOP.CO",
	description:
		"SHOPCO makes shopping an unforgettable experience. Buy those things that make your heart happy and have a shopping experience that leaves you wanting more.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${integralCF.variable} ${satoshi.variable} antialiased`}
			>
				<MobileNav />
				<main>
					<ToastProvider>{children}</ToastProvider>
				</main>
			</body>
		</html>
	);
}
