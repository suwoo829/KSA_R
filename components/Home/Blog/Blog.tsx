import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

// Updated interface to make rating optional
interface ReviewCardProps {
  review: {
    name: string;
    review: string;
    rating?: number; // Make rating optional with the ? operator
    profession: string;
    image: string;
  };
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  // Provide a default rating if it's not present
  const rating = review.rating || 5;

  return (
    <div className="bg-[#1b1021] p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="relative h-16 w-16 rounded-full overflow-hidden">
          <Image
            src={review.image}
            alt={review.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-white">{review.name}</h3>
          <p className="text-gray-400">{review.profession}</p>

          {/* Only show stars if rating exists */}
          {review.rating && (
            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) ? "text-yellow-400" : "text-gray-600"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-400">
                {rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>
      </div>
      <p className="text-gray-300 whitespace-pre-line">{review.review}</p>
    </div>
  );
};

export default ReviewCard;
