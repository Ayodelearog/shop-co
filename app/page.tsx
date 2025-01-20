import DressStyle from "./components/DressStyle";
import HeroSection from "./components/HeroSection";
import JewelryCategory from "./components/Jewelrycategory";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import UpToDate from "./components/UpToDate";
import WomensCategory from "./components/WomensCategory";
import Footer from "./components/ui/Footer";

export default function Home() {
	return (
		<section>
			<HeroSection />
			<NewArrivals />
			<TopSelling />
			<JewelryCategory />
			<WomensCategory />
			<DressStyle />
			<UpToDate />
			<Footer />
		</section>
	);
}
