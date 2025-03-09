import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div className="pt-16 pb-16 bg-[#dce4e4]">
      <SectionHeading>월별 카드뉴스 예시</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={project.id}
              className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Link href={project.url} target="_blank">
                <Image
                  src={project.image}
                  alt="project"
                  width={300}
                  height={200}
                  className="w-full"
                />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Added description text */}
      <div className="w-[80%] mx-auto mt-12 text-center">
        <p className="text-lg md:text-xl text-gray-700">
          매 월 회의록, KSA 재정 상태, 다음 달 일정표를 여러분들께 공유할
          계획이며,
          <br />
          카드뉴스 형태로 공개할 계획입니다.
        </p>
        <p className="text-sm text-gray-500 mt-4 italic">
          *디자인과 내용들은 예시이며, 추후 변동될 수 있습니다
        </p>
      </div>
    </div>
  );
};

export default Project;
