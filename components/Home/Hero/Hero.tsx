import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  // Add client-side rendering with useEffect
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#dce4e4] overflow-hidden relative px-10 md:px-20 pt-28 pb-16">
      {isClient ? (
        <div className="flex flex-col justify-between h-full">
          {/* Top Section with Korean Text */}
          <div className="text-2xl md:text-3xl font-medium text-black">
            2011년도 부터 이어진 KSA, 15기를 향하며
          </div>

          {/* Middle Section with TRUST WORTHY and Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 mb-32 items-center">
            <div>
              {/* TRUST with split colors */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
                <span className="text-[#013365]">TR</span>
                <span className="text-[#fdca19]">UST</span>
              </h1>

              {/* WORTHY all blue */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-[#013365]">
                WORTHY
              </h1>
            </div>

            {/* Image content */}
            <div className="hidden lg:block mx-auto rounded-[3rem] border-[3.5px] border-[#013365] overflow-hidden">
              <Image
                src={BaseInfo?.profilePic || "/images/hero.jpg"}
                alt={BaseInfo?.name || "KSA Team"}
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Section with KSA Information */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
              KSA 후보 1번
            </h2>
            <div className="text-lg md:text-xl space-y-2 text-black">
              <p>회장 후보 권혁인</p>
              <p>외무부 부회장 김희승</p>
              <p>내무부 부회장 김수형</p>
            </div>

            {/* Download Button - Increased size and fixed link */}
            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1K4RaSoFmUdTm7k_PGivcpSk3MnEDaLRC/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#142454] text-white font-medium text-base md:text-lg rounded inline-flex items-center hover:bg-[#013365] transition-colors"
              >
                <span>공약집</span>
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        // Loading/SSR state
        <div className="h-full"></div>
      )}
    </div>
  );
};

export default Hero;
