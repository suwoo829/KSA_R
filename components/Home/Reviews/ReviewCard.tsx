import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

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

  // Split profession to handle line breaks
  const professionLines = profession.split("\n");

  // Check if we have a Kakao ID line (assuming it starts with "카카오톡")
  const hasKakaoId =
    professionLines.length > 1 && professionLines[1].includes("카카오톡");

  // Extract the Kakao ID if present
  const kakaoId = hasKakaoId ? professionLines[1].split(": ")[1] : "";

  return (
    <div className="rounded-md overflow-hidden bg-[#d7e0e0] m-4 w-full max-w-[100%] mx-auto">
      <div className="p-8">
        <Image src="/images/q.png" alt="quote" width={50} height={50} />
        <div className="text-black text-opacity-80 my-4 whitespace-pre-line leading-relaxed text-lg">
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
            <p className="text-lg text-gray-700 font-medium">
              {professionLines[0]}
            </p>

            {/* Display Kakao ID with link if available */}
            {hasKakaoId && (
              <a
                href={`https://open.kakao.com/o/${kakaoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-md text-yellow-600 hover:text-yellow-700 transition-colors mt-1"
              >
                <FaComment className="text-yellow-500" />
                {professionLines[1]}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
