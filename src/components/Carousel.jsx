import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";

const CarouselSlide = ({ data }) => {
  return (
    <div className="">
      <div className="rounded-md border-t p-2 flex md:ml-52 ml-10">
        <img
          src={data.productLogo}
          className="h-16 md:h-20 w-auto"
          alt="VIA Asesores"
        />
      </div>
      <div className="rounded-md border-t flex p-2">
        {/* Sección de las dos columnas */}
        <div className="flex flex-col xs:flex-cols md:flex-row items-center w-full">
          {/* Columna izquierda */}
          <div className="w-full md:w-1/2 px-4 flex justify-center text-center">
            <div className="space-y-4 md:space-y-6 py-4 md:py-8 text-sm md:text-base leading-6 text-gray-600 ">
              <p className="text-md md:text-lg  text-justify ml-20 md:ml-0 flex justify-center">
                {data.sloganLabel}
              </p>
            </div>
          </div>

          {/* Agregar una línea vertical */}
          <div className="border-l border-gray-300 h-[90%] invisible md:visible"></div>

          {/* Columna derecha */}
          <div className="w-full md:w-1/2 px-4">
            {/* Este contenido solo se muestra en pantallas mayores a `md` */}
            <div className="hidden md:block space-y-2 md:space-y-4 py-2 md:py-2 text-sm md:text-base leading-2 text-gray-600">
              <h1 className="text-lg md:text-xl text-center uppercase">
                {data.sinceLabel}
              </h1>
              {data.slogans.slice(0).map((slogan, index) => (
                <div key={index} className="flex items-center">
                  <CheckIcon className="h-6 w-6" style={{ flex: 'none', marginRight: '8px' }} />
                  <p
                    key={index}
                    className="text-md md:text-lg text-center justify-center text-justify ml-2"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    {slogan}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Imagen superior derecha */}
        <div className="collapse md:visible md:my-auto w-full md:w-1/2 ml-6">
          <img
            src={data.bgImage}
            className="h-0 md:h-[90%] md:w-full invisible md:visible rounded-md shadow-sm"
            alt="VIA Asesores"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.logos.map((logo, index) => (
          <div
            key={index}
            className="pt-4 md:pt-8 text-sm md:text-base font-semibold leading-6 md:leading-7 self-center"
          >
            <img src={logo} className="w-32 md:w-48 mx-auto" alt="Logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Carousel = ({ slides }) => {
  const [slideNumber, setSlideNumber] = useState(0);

  const leftSlide = () => {
    if (slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
    } else {
      setSlideNumber(slides.length - 1);
    }
  };

  const rightSlide = () => {
    if (slideNumber < slides.length - 1) {
      setSlideNumber(slideNumber + 1);
    } else {
      setSlideNumber(0);
    }
  };

  const currentSlide = slides[slideNumber];

  return (
    <>
      <div className="px-10 flex flex-row md:h-[55vh]">
        <div
          className="flex justify-center items-center cursor-pointer group"
          onClick={() => leftSlide()}
        >
          <ChevronLeftIcon className="w-12 h-24 group-hover:text-blue-600" />
        </div>
        <div className="relative pt-6 pb-2 sm:mx-auto sm:max-w-lg md:max-w-4xl lg:max-w-screen-xl sm:px-10 md:flex md:flex-row gap-4 h-1/3 md:h-[55vh] ">
          {/* Renderizar la diapositiva actual */}
          <div className="w-full">
            <CarouselSlide data={currentSlide} />
          </div>
        </div>
        <div
          className="flex justify-center items-center cursor-pointer group"
          onClick={() => rightSlide()}
        >
          <ChevronRightIcon className="w-12 h-24 group-hover:text-blue-600" />
        </div>
      </div>
    </>
  );
};

export default Carousel;
