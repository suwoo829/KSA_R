import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

// props type matching your data structure
type Props = {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
};

const ReviewCard = ({ review }: Props) => {
  const { image, name, profession, rating, review: clientReview } = review;

  return (
    <div className="rounded-md overflow-hidden bg-[#140c1c] m-4 w-full max-w-[100%] mx-auto">
      <div className="p-8">
        <Image src="/images/q.png" alt="quote" width={50} height={50} />
        <div className="text-white text-opacity-80 my-4 whitespace-pre-line leading-relaxed text-lg">
          {clientReview}
        </div>
        <Image
          src="/images/q.png"
          alt="quote"
          width={50}
          height={50}
          className="ml-auto"
        />
      </div>
      {/* <div className="px-6 py-3 mb-6 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold shadow-md z-10 relative">
        <span>{rating}/5</span>
        <FaStar className="text-yellow-500" />
      </div> */}
      <div className="bg-gray-100">
        <div className="py-8 px-10 flex items-center space-x-10">
          <div>
            <Image
              src={image}
              alt={name}
              width={140}
              height={140}
              className="rounded-full border-4 border-indigo-600"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-lg text-gray-700 font-medium">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
