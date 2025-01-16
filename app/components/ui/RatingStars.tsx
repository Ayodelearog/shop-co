import React from 'react';
import Image from 'next/image';

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return (
            <Image
              key={index}
              src="/ShopCo_icons/rate-star-full.svg"
              alt="Full star"
              width={18}
              height={18}
            />
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <div key={index} className="relative w-[9px] h-[18px]">
              <Image
                src="/ShopCo_icons/rate-star-half.svg"
                alt="Half star"
                width={9}
                height={18}
                className="absolute bottom-0"
              />
            </div>
          );
        } else {
          return (
            // <Image
            //   key={index}
            //   src="/ShopCo_icons/rate-star-empty.svg"
            //   alt="Empty star"
            //   width={18}
            //   height={18}
            // />
            ""
          );
        }
      })}
    </div>
  );
};

export default RatingStars;

