import React from 'react'
import TopSelling from '../components/TopSelling'
import NewArrivals from '../components/NewArrivals'
import JewelryCategory from '../components/Jewelrycategory'
import WomensCategory from '../components/WomensCategory'

const page = () => {
  return (
    <section>
        <NewArrivals />
        <TopSelling />
        <JewelryCategory />
        <WomensCategory />
        
    </section>
  )
}

export default page;