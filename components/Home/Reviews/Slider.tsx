"use client";
import { clientReviews } from "@/Data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// Update responsive settings to show only 1 item at a time on all devices
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider = () => {
  // Custom arrow components that match the image
  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black rounded-full p-2 w-10 h-10 flex items-center justify-center"
      aria-label="Previous slide"
    >
      <BsChevronLeft className="text-white text-xl" />
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black rounded-full p-2 w-10 h-10 flex items-center justify-center"
      aria-label="Next slide"
    >
      <BsChevronRight className="text-white text-xl" />
    </button>
  );

  // Custom dot component
  const CustomDot = ({ onClick, active }) => (
    <button
      className={`h-2 w-2 mx-1 rounded-full ${
        active ? "bg-black" : "bg-gray-400"
      }`}
      onClick={onClick}
    />
  );

  return (
    <div className="w-full mx-auto relative">
      <Carousel
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        customDot={<CustomDot />}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite
        responsive={responsive}
        showDots={true}
        removeArrowOnDeviceType={[]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        centerMode={false}
      >
        {clientReviews.map((review, index) => (
          <div key={index} className="px-4 py-2">
            <ReviewCard review={review} />
          </div>
        ))}
      </Carousel>

      {/* Add CSS for dot positioning */}
      <style jsx global>{`
        .custom-dot-list-style {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Slider;
