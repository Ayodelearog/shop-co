import React from 'react';
import Image from 'next/image';

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return (
            <Image
              key={index}
              src="/shopco_icons/rate-star-full.svg"
              alt="Full star"
              width={18}
              height={18}
            />
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <div key={index} className="relative w-[18px] h-[18px]">
              <Image
                src="/shopco_icons/rate-star-half.svg"
                alt="Half star"
                width={18}
                height={9}
                className="absolute bottom-0"
              />
            </div>
          );
        } else {
          return (
            <Image
              key={index}
              src="/shopco_icons/rate-star-empty.svg"
              alt="Empty star"
              width={18}
              height={18}
            />
          );
        }
      })}
    </div>
  );
};

export default RatingStars;
