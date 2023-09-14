import React, { useState } from "react";

const CardInfo = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const borderColor = isHovered ? "rgba(0, 0, 255, 0.5)" : "transparent";

  return (
    <div
      className="m-5 max-w-sm h-[280px]" // Establecer una altura fija aquí
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="bg-white border-l-4 border-blue-500 hover:border-l-violet-500 rounded-lg shadow-md h-full"
        style={{ borderRight: `4px solid ${borderColor}` }}
      >
        <h1 className="p-4 text-xl font-bold text-gray-900">
          {props.title}
        </h1>
        <p className="p-4 font-normal text-gray-700 text-justify">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default CardInfo;

