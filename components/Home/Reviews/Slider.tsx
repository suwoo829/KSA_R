"use client";
import { clientReviews } from "@/Data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

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
  return (
    <div className="w-full mx-auto">
      <Carousel
        arrows={true}
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
    </div>
  );
};

export default Slider;
