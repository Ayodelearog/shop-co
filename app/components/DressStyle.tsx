// "use client";

// import React from "react";
// import { motion, useTransform, useViewportScroll } from "framer-motion";
// import Image from "next/image";

// const DressStyle = () => {
//   const { scrollYProgress } = useViewportScroll();

//   const cards = [
//     { id: 1, label: "Casual", image: "/ShopCo_images/casual.png" },
//     { id: 2, label: "Formal", image: "/ShopCo_images/formal.png" },
//     { id: 3, label: "Party", image: "/ShopCo_images/sporty.png" },
//     { id: 4, label: "Gym", image: "/ShopCo_images/trendy.png" },
//   ];

//   // Precompute transforms for all cards
//   const transforms = cards.map((_, index) => {
//     const start = index * 0.1; // When this card's animation starts
//     const end = start + 0.2; // When this card's animation ends

//     return {
//       yPosition: useTransform(
//         scrollYProgress,
//         [start, end],
//         [index * -30, index * 80]
//       ),
//       opacity: useTransform(scrollYProgress, [start, end], [0.5, 1]),
//     };
//   });

//   return (
//     <section className="w-full px-4 mt-[50px]">
//       <div className="rounded-[20px] bg-gray pt-10">
//         <motion.h2
//           className="text-[36px] font-bold font-integral leading-[36px] text-center"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           BROWSE BY DRESS STYLE
//         </motion.h2>

//         <div className="h-[200vh] py-10 px-6 relative">
//           <div className="sticky top-20 w-full h-[300px]">
//             <div className="relative w-full h-full">
//               {cards.map((card, index) => (
//                 <motion.div
//                   key={card.id}
//                   style={{
//                     y: transforms[index].yPosition,
//                     opacity: transforms[index].opacity,
//                   }}
//                   className="absolute w-full h-[190px] rounded-[20px] flex justify-center items-center bg-gray-100 shadow-md"
//                 >
//                   <p className="absolute top-4 left-6 z-[2] font-satoshi text-6 font-bold">
//                     {card.label}
//                   </p>
//                   <Image
//                     src={card.image}
//                     fill
//                     sizes=""
//                     alt={card.label}
//                     className="object-contain rounded-[20px]"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DressStyle;
