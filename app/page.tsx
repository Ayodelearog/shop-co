// import DressStyle from "./components/DressStyle";
import HeroSection from "./components/HeroSection";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";

export default function Home() {
	return (
		<section>
			<HeroSection />
			<NewArrivals />
			<TopSelling />
			{/* <DressStyle /> */}
		</section>
	);
}
