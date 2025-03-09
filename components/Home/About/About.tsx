import SectionHeading from "@/components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const About = () => {
  // Policy items with descriptions
  const policyItems = [
    {
      title: "보트파티 재 부활",
      description:
        "과거 인기있었던 보트파티 이벤트를 재개하여 학생들간 교류 활성화",
    },
    {
      title: "KSA 재정, 회의록, 다음달 일정 보고",
      description: "보다 투명한 회계와 주기적인 업무 현황 공개",
    },
    {
      title: "타 학생회와의 다국적 이벤트 (e.g., TSA, ISA, SEASA)",
      description:
        "로컬 학생회, 대만 학생회, 국제학생 학생회 등과의 협업 이벤트",
    },
    {
      title: "봄학기 이벤트 (e.g., 봄학기 개강총회 및 개강파티 진행)",
      description:
        "학기초를 맞이하여 선후배간 다양한 네트워킹 및 교류 창구 개설",
    },
    {
      title: "한인회 수익 모델 (e.g., 포토이즘)",
      description: "포토이즘 교내 설치, 포토이즘과의 협업",
    },
    {
      title: "e-Sports 대회 (League of Legends)",
      description: "과기대 내 토너먼트 기획 및 타 학교와의 경쟁",
    },
    {
      title: "개발 임원진 추가 및 과기대 어플/사이트 개발",
      description:
        "개발 담당 임원진직 추가, KSA 어플 또는 사이트 개발하여 원활한 정보 공유",
    },
    {
      title: "동문 창업 브랜드와의 협업 (e.g., BePlain, 술담화)",
      description:
        "BePlain, 술담화 같은 동문 창업 선배님들 초청 강연 및 이벤트",
    },
    {
      title: "지속적인 교수님과의 연결",
      description:
        "식사자리/티타임 이외에 과기대 한인 교수님들과 지속적인 교류 창구 개설",
    },
    {
      title: "국내 공모전 정보 전달 계정",
      description:
        "링커리어와 같은 사이트들을 통하여 인스타그램 계정을 통해 홍보 및 소개",
    },
    {
      title: "지속적인 커리어 세션 활성화",
      description:
        "선배들과의 커리어 세션을 통해 학생들의 진로 설계 지원 및 네트워킹 기회 제공",
    },
  ];

  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>공약 세부 설명</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-20">
        {/* Text Content */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            {policyItems.map((policy, index) => (
              <div key={index} className="mb-8">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                    <FaCheck className="text-white" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                    {policy.title}
                  </p>
                </div>
                <p className="ml-9 text-gray-500 text-sm">
                  {policy.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Content */}
      </div>
    </div>
  );
};

export default About;
