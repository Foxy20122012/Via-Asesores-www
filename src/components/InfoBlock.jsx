import React from "react";

const InfoBlock = (props) => {
  const { title, text, imageUrl, imageAlt } = props;

  return (
    <div className="bg-blue-500 p-8 text-white">
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="col-span-1 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold uppercase ">{title}</h1>
          <p className="text-md ">{text}</p>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <div className="w-px h-32 bg-white"></div> {/* Línea vertical centrada */}
        </div>
        <div className="col-span-1 w-3/4">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;








