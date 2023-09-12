import React from "react";

const InfoBlock = (props) => {
  const { title, text, imageUrl, imageAlt } = props;

  return (
    <div className="bg-sky-700 p-8 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center">
        <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 flex flex-col">
          <h1 className="text-2xl font-bold uppercase mx-2 my-4 justify-start">
            {title}
          </h1>
          <p className="text-md mx-2 my-4 justify-center items-center">{text}</p>
        </div>
        <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 md:flex md:justify-center">
          <div className="hidden sm:block">
            <div className="w-1 h-52 bg-white "></div> {/* Línea vertical en pantallas grandes */}
          </div>
          <div className="block sm:hidden">
            <div className="w-full h-1 bg-white"></div> {/* Línea horizontal en pantallas móviles */}
          </div>
        </div>
        <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 w-3/4">
          <img src={imageUrl} alt={imageAlt} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;










