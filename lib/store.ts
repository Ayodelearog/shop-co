import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}

interface CartItem extends Product {
	quantity: number;
}

interface ProductStore {
	allProducts: Product[];
	filteredProducts: Product[];
	categories: string[];
	currentCategory: string | null;
	cart: CartItem[];
	isLoading: boolean;
	error: string | null;
	fetchProducts: () => Promise<void>;
	fetchProductsByCategory: (
		category: string,
		updateStore?: boolean
	) => Promise<Product[]>;
	fetchProductById: (id: number) => Promise<Product | null>;
	fetchCategories: () => Promise<void>;
	setCurrentCategory: (category: string | null) => void;
	addToCart: (product: Product) => void;
	removeFromCart: (productId: number) => void;
	updateCartItemQuantity: (productId: number, quantity: number) => void;
	clearCart: () => void;
	clearError: () => void;
}

const storage = {
	getItem: (name: string): string | null => {
		try {
			return localStorage.getItem(name);
		} catch (error) {
			// console.warn(`Error reading from localStorage:`, error);
			return null;
		}
	},
	setItem: (name: string, value: string): void => {
		try {
			localStorage.setItem(name, value);
		} catch (error) {
			// console.warn(`Error writing to localStorage:`, error);
		}
	},
	removeItem: (name: string): void => {
		try {
			localStorage.removeItem(name);
		} catch (error) {
			// console.warn(`Error removing item from localStorage:`, error);
		}
	},
};

export const useProductStore = create<ProductStore>()(
	persist(
		(set, get) => ({
			allProducts: [],
			filteredProducts: [],
			categories: [],
			currentCategory: null,
			cart: [],
			isLoading: false,
			error: null,
			fetchProducts: async () => {
				set({ isLoading: true, error: null });
				try {
					const response = await fetch("https://fakestoreapi.com/products");

					if (response.status === 304) {
						console.log("Products not modified, using cached data");
            // const data = await response.json();
						set({ isLoading: false,  });
						return; // Exit early, using cached data
					}
					if (!response.ok) {
						throw new Error(`Failed to fetch products: ${response.statusText}`);
					}
					const data = await response.json();
					set({
						allProducts: data,
						filteredProducts: data,
						isLoading: false,
						currentCategory: null,
					});
				} catch (error) {
					set({
						error: (error as Error).message,
						isLoading: false,
						allProducts: [],
						filteredProducts: [],
					});
				}
			},
			fetchProductsByCategory: async (category: string, updateStore = true) => {
				if (updateStore) {
					set({ isLoading: true, error: null, currentCategory: category });
				}
				try {
					const response = await fetch(
						`https://fakestoreapi.com/products/category/${category}`,
						{ cache: "no-cache" }
					);

					if (response.status === 304) {
						console.log("Products not modified, using cached data");
            // const data = await response.json();
						set({ isLoading: false,  });
						return; // Exit early, using cached data
					}

					if (!response.ok) {
						throw new Error(
							`Failed to fetch products for category: ${response.statusText}`
						);
					}

					const data = await response.json();
					
					if (updateStore) {
						set({ filteredProducts: data, isLoading: false });
					}
					return data;
				} catch (error) {
					set({ error: (error as Error).message, isLoading: false });
					if (updateStore) {
						set({ filteredProducts: [] });
					}
					return [];
				}
			},
			fetchProductById: async (id: number) => {
				set({ isLoading: true, error: null });
				try {
					const response = await fetch(
						`https://fakestoreapi.com/products/${id}`
					);
					if (!response.ok) {
						throw new Error(`Failed to fetch product: ${response.statusText}`);
					}
					const data = await response.json();
					set({ isLoading: false });
					return data;
				} catch (error) {
					set({ error: (error as Error).message, isLoading: false });
					return null;
				}
			},
			fetchCategories: async () => {
				set({ isLoading: true, error: null });
				try {
					const response = await fetch(
						"https://fakestoreapi.com/products/categories"
					);
					if (!response.ok) {
						throw new Error(
							`Failed to fetch categories: ${response.statusText}`
						);
					}
					const data = await response.json();
					set({ categories: data, isLoading: false });
				} catch (error) {
					set({
						error: (error as Error).message,
						isLoading: false,
						categories: [],
					});
				}
			},
			setCurrentCategory: (category: string | null) => {
				const { allProducts } = get();
				set({
					currentCategory: category,
					filteredProducts: category
						? allProducts.filter((p) => p.category === category)
						: allProducts,
				});
			},
			addToCart: (product: Product) => {
				const { cart } = get();
				const existingItem = cart.find((item) => item.id === product.id);
				if (existingItem) {
					set({
						cart: cart.map((item) =>
							item.id === product.id
								? { ...item, quantity: item.quantity + 1 }
								: item
						),
					});
				} else {
					set({ cart: [...cart, { ...product, quantity: 1 }] });
				}
			},
			removeFromCart: (productId: number) => {
				set({ cart: get().cart.filter((item) => item.id !== productId) });
			},
			updateCartItemQuantity: (productId: number, quantity: number) => {
				if (quantity < 0) {
					set({ error: "Quantity cannot be negative" });
					return;
				}
				set({
					cart: get()
						.cart.map((item) =>
							item.id === productId ? { ...item, quantity } : item
						)
						.filter((item) => item.quantity > 0),
				});
			},
			clearCart: () => {
				set({ cart: [] });
			},
			clearError: () => {
				set({ error: null });
			},
		}),
		{
			name: "product-storage",
			storage: createJSONStorage(() => storage),
			// onRehydrateStorage: () => (state) => {
			//   // if (state) {
			//   //   console.log('State rehydrated successfully')
			//   // } else {
			//   //   console.warn('Failed to rehydrate state')
			//   // }
			// },
		}
	)
);
