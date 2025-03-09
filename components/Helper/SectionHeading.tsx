import React, { ReactNode } from "react";

// define props type
type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <h1 className="w-fit text-center px-4 py-3 mx-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 uppercase text-[#142454]">
      {children}
    </h1>
  );
};

export default SectionHeading;
