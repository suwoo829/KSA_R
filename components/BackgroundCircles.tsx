import React from "react";

const BackgroundCircles: React.FC = () => {
  return (
    <div className="background-circles">
      {/* Top-left pink circle */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-70"
        style={{ backgroundColor: "#d85a7f", filter: "blur(30px)" }}
      ></div>

      {/* Top-right purple circle */}
      <div
        className="absolute -top-20 -right-40 w-96 h-96 rounded-full opacity-60"
        style={{ backgroundColor: "#5b5fb5", filter: "blur(40px)" }}
      ></div>

      {/* Bottom-right teal/cyan circle */}
      <div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-50"
        style={{ backgroundColor: "#71d3c9", filter: "blur(25px)" }}
      ></div>

      {/* Bottom-left yellow circle */}
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-60"
        style={{ backgroundColor: "#f5d972", filter: "blur(35px)" }}
      ></div>
    </div>
  );
};

export default BackgroundCircles;
