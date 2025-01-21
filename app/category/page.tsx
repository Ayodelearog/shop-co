import React from 'react'
import TopSelling from '../components/TopSelling'
import NewArrivals from '../components/NewArrivals'
import JewelryCategory from '../components/Jewelrycategory'
import WomensCategory from '../components/WomensCategory'
import UpToDate from '../components/UpToDate'
import Footer from '../components/ui/Footer'

const page = () => {
  return (
    <section>
        <NewArrivals />
        <TopSelling />
        <JewelryCategory />
        <WomensCategory />

        <div className="w-full mt-[50px]">
				<UpToDate />
				<Footer />
			</div>
        
    </section>
  )
}

export default page;