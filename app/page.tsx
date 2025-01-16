import DressStyle from "./components/DressStyle";
import HeroSection from "./components/HeroSection";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import UpToDate from "./components/UpToDate";
import Footer from "./components/ui/Footer";

export default function Home() {
	return (
		<section>
			<HeroSection />
			<NewArrivals />
			<TopSelling />
			<DressStyle />
			<UpToDate />
			<Footer />
		</section>
	);
}
