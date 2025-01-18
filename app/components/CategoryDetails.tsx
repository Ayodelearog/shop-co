'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Product } from "@/lib/store"
import React, { useEffect, useState } from "react"
import Image from "next/image"
// import { useToast } from "./ui/Toast"
import UpToDate from "./UpToDate"
import Footer from "./ui/Footer"
import ProductCard from "./ui/ProductCard"
import Link from "next/link"
import FilterPopover from "./ui/FilterPopover"
// import FilterPopover from "./FilterPopover"

interface CategoryDetailsProps {
  products: Product[]
}

const CategoryDetails = ({ products }: CategoryDetailsProps) => {
//   const addToCart = useProductStore((state) => state.addToCart)
//   const updateCartItemQuantity = useProductStore(
//     (state) => state.updateCartItemQuantity
//   )
//   const [activeId, setActiveId] = useState(0)
//   const [itemQuantity, setItemQuantity] = useState<number>(1)
//   const { showToast } = useToast()
  const [header, setHeader] = useState("")
//   const [categoryLink, setCategoryLink] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    if (products[0].category.includes("men's")) {
      setHeader("New Arrivals")
    //   setCategoryLink("category/men's clothing")
    } else {
      setHeader("Top Selling")
    }
  }, [products])

  const handleFilterClick = () => {
    setIsFilterOpen(true)
  }

  return (
    <section className="relative">
      <div className="w-full px-4">
        <Breadcrumb className="pt-5 flex items-center gap-1 border-t border-black border-opacity-10">
          <BreadcrumbList>
            <BreadcrumbItem className="font-satoshi text-[14px] font-normal">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/category/1">Category</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{header}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="w-full flex items-center justify-between mt-3">
          <h1 className="font-bold font-satoshi text-6 text-black">
            {header}
          </h1>

          <button
            className="bg-gray w-[32px] h-[32px] relative rounded-full flex items-center justify-center"
            onClick={handleFilterClick}
          >
            <Image
              src="/ShopCo_icons/filter.svg"
              width={16}
              height={16}
              alt="filter icon"
              className="object-contain"
            />
          </button>
        </div>

        <div className="w-full mt-[30px] overflow-hidden grid grid-cols-2 gap-8 justify-center">
          {products.map((product) => (
            <div key={product.id} className="w-full">
              <Link href={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </div>
          ))}
        </div>

        <div className="w-full mt-6 border-t border-black border-opacity-10"></div>
      </div>

      <div className="w-full mt-[50px]">
        <UpToDate />
        <Footer />
      </div>

      <FilterPopover isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </section>
  )
}

export default CategoryDetails

