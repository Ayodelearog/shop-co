import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
          port: '',
          pathname: '/img/*',
          search: '',
        },
      ],
    },
  
};

export default nextConfig;

// Object { id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95, description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category: "men's clothing", image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", rating: {…} }
// ​
// category: "men's clothing"
// ​
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// ​
// id: 1
// ​
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// ​
// price: 109.95
// ​
// rating: Object { rate: 3.9, count: 120 }
// ​
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// ​
// <prototype>: Object { … }
// localhost:3000:13898:27
