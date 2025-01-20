"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useProductStore } from "@/lib/store";

interface FilterPopoverProps {
	isOpen: boolean;
	onClose: () => void;
}

const sizes = [
    { id: 1, label: 'XX-Small' },
    { id: 2, label: 'X-Small' },
    { id: 3, label: 'Small' },
    { id: 4, label: 'Medium' },
    { id: 5, label: 'Large' },
    { id: 6, label: 'X-Large' },
    { id: 7, label: 'XX-Large' },
    { id: 8, label: '3X-Large' },
    { id: 9, label: '4X-Large' },
  ]
  

const FilterPopover: React.FC<FilterPopoverProps> = ({ isOpen, onClose }) => {
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

	const { categories, fetchCategories, isLoading, error } = useProductStore();

    const [isSizeExpanded, setIsSizeExpanded] = useState(true)
    const [activeId, setActiveId] = useState<number | null>(null)

    const handlePillClick = (pillId: number) => {
        setActiveId(prevId => prevId === pillId ? null : pillId)
      }

	const handleCategoryChange = (category: string) => {
		setSelectedCategories((prev) =>
			prev.includes(category)
				? prev.filter((c) => c !== category)
				: [...prev, category]
		);
	};

	const handlePriceChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const newValue = parseInt(e.target.value);
		setPriceRange((prev) => {
			const newRange = [...prev] as [number, number];
			newRange[index] = newValue;
			return newRange;
		});
	};

	useEffect(() => {
		if (isOpen && categories.length === 0) {
			fetchCategories();
		}
	}, [isOpen, categories.length, fetchCategories]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 bg-black z-40"
						onClick={onClose}
					/>
					<motion.div
						initial={{ y: "100%" }}
						animate={{ y: 0 }}
						exit={{ y: "100%" }}
						// transition={{ type: "easeInOut" }}
						transition={{ type: "spring", damping: 30, stiffness: 160 }}
						className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl shadow-lg mt-[60px]"
						style={{ height: "calc(95vh - 30px)" }}
					>
						<div className="p-[18px] h-full overflow-y-auto">
							<div className="flex justify-between items-center pb-4 border-b border-black border-opacity-10">
								<h2 className="font-bold font-satoshi text-6 text-black">
									Filters
								</h2>
								<Button variant="ghost" onClick={onClose}>
									<Image
										src="/ShopCo_icons/close.svg"
										width={24}
										height={24}
										alt="close icon"
									/>
								</Button>
							</div>

							<div className="space-y-6 mt-5">
								<div>
									<h3 className="text-lg font-semibold mb-2">Categories</h3>
									{isLoading ? (
										<p>Loading categories...</p>
									) 
									// : error ? (
									// 	<p>Error loading categories: {error}</p>
									// ) 
									: (
										categories.map((category) => (
											<div
												key={category}
												className="flex items-center space-x-2 mb-2"
											>
												<Checkbox
													id={category}
													checked={selectedCategories.includes(category)}
													onCheckedChange={() => handleCategoryChange(category)}
												/>
												<label
													htmlFor={category}
													className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70
                                                    font-satoshi text-black text-opacity-60 capitalize"
												>
													{category}
												</label>
											</div>
										))
									)}
								</div>

								<div>
									<h3 className="text-lg font-semibold mb-2">Price Range</h3>
									<div className="flex items-center space-x-4">
										<input
											type="number"
											value={priceRange[0]}
											onChange={(e) => handlePriceChange(e, 0)}
											className="w-24 p-2 border rounded"
											min={0}
											max={priceRange[1]}
										/>
										<span>to</span>
										<input
											type="number"
											value={priceRange[1]}
											onChange={(e) => handlePriceChange(e, 1)}
											className="w-24 p-2 border rounded"
											min={priceRange[0]}
										/>
									</div>
								</div>
							</div>

							{/* sizes section */}
							<div className="w-full flex flex-col gap-5 mt-6 border-y border-black border-opacity-10 py-5">
								<div
									className="flex justify-between items-center cursor-pointer"
									onClick={() => setIsSizeExpanded(!isSizeExpanded)}
								>
									<h2 className="font-bold font-satoshi text-6 text-black">
										Size
									</h2>
									<motion.div
										animate={{ rotate: isSizeExpanded ? 180 : 0 }}
										transition={{ duration: 0.3 }}
									>
										<Image
											src="/ShopCo_icons/caret.svg"
											width={16}
											height={16}
											alt="expand icon"
										/>
									</motion.div>
								</div>

								<AnimatePresence>
									{isSizeExpanded && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
											className="overflow-hidden"
										>
											<div className="w-full flex items-center flex-wrap gap-2">
												{sizes.map((size) => (
													<div
														key={size.id}
														onClick={() => handlePillClick(size.id)}
														className={`flex items-center justify-center rounded-full py-2.5 px-5 transition-colors duration-500 ease-in-out font-satoshi text-[14px] font-normal text-opacity-60 text-black select-none ${
															activeId === size.id
																? "bg-black text-white text-opacity-100"
																: "bg-gray"
														}`}
													>
														{size.label}
													</div>
												))}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>

							<div className="mt-8">
								<Button
                                variant="outline"
									className="w-full text-sm font-medium font-satoshi py-5 bg-black text-white
                                    hover:bg-gray hover:text-black  transition-colors duration-500 ease-in-out"
									onClick={onClose}
								>
									Apply Filters
								</Button>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default FilterPopover;
