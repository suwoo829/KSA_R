import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import Slider from "./Slider";

const Reviews = () => {
  return (
    <div className="pt-16 pb-16 bg-[#dce4e4]">
      <SectionHeading>후보자 자기소개</SectionHeading>
      <div className="w-[100%] sm:w-[80%] mx-auto mt-20">
        <Slider />
      </div>
    </div>
  );
};

export default Reviews;
