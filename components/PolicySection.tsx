"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Define the structure for each policy section
interface PolicySection {
  id: number;
  title: string;
  points: string[];
}

const policySections: PolicySection[] = [
  {
    id: 1,
    title: "더 많은 이벤트",
    points: [
      "선배들과 친해질수 있는 기회",
      "타국적 학생들을 만날 수 있는 기회",
      "보트파티 및 개강파티",
      "e-Sports 대회",
      "포토이즘 협업",
    ],
  },
  {
    id: 2,
    title: "뛰어난 개방성",
    points: [
      "의회 일정 공개",
      "회의록 공개",
      "회계 공개를 통한",
      "보여주는 KSA",
    ],
  },
  {
    id: 3,
    title: "물론,커리어도",
    points: [
      "동문 창업자 선배님들",
      "과기대 및 타 학교 교수님들",
      "과기대 어플/사이트 개발",
      "개발 임원진 추가",
    ],
  },
];

const PolicySection = () => {
  return (
    <div className="w-full overflow-hidden">
      {policySections.map((section) => (
        <SectionPanel key={section.id} section={section} />
      ))}
    </div>
  );
};

const SectionPanel = ({ section }: { section: PolicySection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Get the background color based on the section id
  const getBgColor = (id: number) => {
    return "bg-[#dce4e4]";
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`relative min-h-screen w-full ${getBgColor(
        section.id
      )} border-t border-gray-300`}
    >
      <div className="container mx-auto px-4 py-20 relative">
        {/* Section number circle */}
        <motion.div
          className="absolute right-10 top-10 w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-black text-2xl font-bold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          {section.id}
        </motion.div>

        {/* Title with improved styling */}
        <motion.h2
          className="text-5xl sm:text-6xl font-black leading-tight mb-14 whitespace-pre-line"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {section.title}
        </motion.h2>

        {/* Policy points with better styling and larger text size */}
        <div className="ml-4 space-y-6">
          {section.points.map((point, idx) => (
            <motion.div
              key={idx}
              className="flex items-start"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
            >
              <span className="inline-block w-3 h-3 rounded-full bg-black mt-3 mr-3"></span>
              <p className="text-xl sm:text-2xl md:text-3xl">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PolicySection;
