"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

// define the props type
type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServiceCard = ({ service }: Props) => {
  // Split the description by newline to create bullet points
  const descriptionPoints = service.description
    .split("\n")
    .filter((line) => line.trim() !== "");

  return (
    <Tilt
      className="shadow-2xl p-6 rounded-lg"
      style={{ backgroundColor: "#172554" }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-3">
          <Image
            src={`${service.icon}`}
            alt={service.title}
            width={50}
            height={50}
          />
        </div>
        <h1 className="text-lg font-bold text-white mb-3">{service.title}</h1>
        <ul className="text-sm text-white text-opacity-80 pl-4">
          {descriptionPoints.map((point, index) => (
            <li key={index} className="mb-2 flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mr-2 mt-1.5"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </Tilt>
  );
};

export default ServiceCard;
