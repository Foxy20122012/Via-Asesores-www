import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Carousel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const totalSlides = 2;

  const leftSlide = () => {
    if (slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
    } else {
      setSlideNumber(totalSlides - 1);
    }
  };

  const rightSlide = () => {
    if (slideNumber < totalSlides - 1) {
      setSlideNumber(slideNumber + 1);
    } else {
      setSlideNumber(0);
    }
  };

  const Slide001 = () => {
    const productLogo =
      "https://www.via-asesores.com/logos/logo_horizontal/smartanalytics_horizontal_logo.svg";
    const sinceLabel = "BENEFICIOS";
    const sloganLabel =
      "Analice los KPI de las áreas de negocio (departamentos) de su empresa, definiendo los dashboard con sus gráficas que le permitan tomar mejores decisiones desde Smart Analitycs.";
    const sloganLabel2 = "Genere dashboard en 2 horas.";
    const sloganLabel3 = "Genere dashboard en 2 horas.";
    const sloganLabel4 = "Genere dashboard en 2 horas.";
    const sloganLabel5 = "Genere dashboard en 2 horas.";
  
    const orbisLogo =
      "https://www.via-asesores.com/logos/logo_horizontal/orbistechnology_logo.svg";
    const bgImage = "/Smart Analytics.jpeg";
  
    return (
      <div className="">
        <div className="rounded-md border-t p-2 flex md:ml-52 ml-10">
          <img
            src={productLogo}
            className="h-16 md:h-20 w-auto"
            alt="VIA Asesores"
          />
        </div>
        <div className="rounded-md border-t flex p-2">
          {/* Sección de las dos columnas */}
          <div className="flex flex-col xs:flex-cols md:flex-row items-center w-full">
            {/* Columna izquierda */}
            <div className="w-full md:w-1/2 px-4 flex justify-center">
              <div className="space-y-4 md:space-y-6 py-4 md:py-8 text-sm md:text-base leading-6 text-gray-600 ">
                <p className="text-md md:text-lg  text-justify ml-20 md:ml-0">
                  {sloganLabel}
                </p>
              </div>
            </div>
  
            {/* Agregar una línea vertical */}
            <div className="border-l border-gray-300 h-[90%] invisible md:visible"></div>
  
            {/* Columna derecha */}
            <div className="w-full md:w-1/2 px-4">
              {/* Este contenido solo se muestra en pantallas mayores a `md` */}
              <div className="hidden md:block space-y-4 md:space-y-6 py-4 md:py-8 text-sm md:text-base leading-6 text-gray-600">
                <h1 className="text-lg md:text-xl text-center">{sinceLabel}</h1>
                <p className="text-md md:text-lg text-center">{sloganLabel2}</p>
                <p className="text-md md:text-lg text-center">{sloganLabel3}</p>
                <p className="text-md md:text-lg text-center">{sloganLabel4}</p>
                <p className="text-md md:text-lg text-center">{sloganLabel5}</p>
                <p className="text-md md:text-lg text-center">{sloganLabel5}</p>
              </div>
            </div>
          </div>
  
          {/* Imagen superior derecha */}
          <div className="collapse md:visible md:my-auto w-full md:w-1/2 ml-6">
            <img
              src={bgImage}
              className="h-0 md:h-[90%] md:w-full invisible md:visible rounded-md shadow-sm"
              alt="VIA Asesores"
            />
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="pt-4 md:pt-8 text-sm md:text-base font-semibold leading-6 md:leading-7 self-center">
            <img
              src={orbisLogo}
              className="w-32 md:w-48 mx-auto"
              alt="Orbis Technology"
            />
          </div>
          <div className="pt-4 md:pt-8 text-sm md:text-base font-semibold leading-6 md:leading-7 self-center">
            <img
              src={orbisLogo}
              className="w-32 md:w-48 mx-auto"
              alt="Orbis Technology"
            />
          </div>
          <div className="pt-4 md:pt-8 text-sm md:text-base font-semibold leading-6 md:leading-7 self-center">
            <img
              src={orbisLogo}
              className="w-32 md:w-48 mx-auto"
              alt="Orbis Technology"
            />
          </div>
        </div>
      </div>
    );
  };
  
  

  const Slide002 = () => {
    const viaLogo =
      "https://www.via-asesores.com/logos/logo_vertical/viaasesores_vertical_logo.svg";
    const sinceLabel = "Innovando desde 2,001";
    const sloganLabel =
      "Aplicaciones empresariales y servicios de TI a través de herramientas digitales de última generación.";
    const orbisLogo =
      "https://www.via-asesores.com/logos/logo_horizontal/orbistechnology_logo.svg";
    const bgImage =
      "https://www.via-asesores.com/backgrounds/common/bg_001_meeting.png";

    return (
      <div className="rounded-md border-t flex p-2">
        <div className="flex flex-col items-center">
          <img src={viaLogo} className="h-16 " alt="VIA Asesores" />
          <div className="divide-y divide-gray-300/50 flex items-center flex-col">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <h1 className="text-2xl md:text-4xl text-center">{sinceLabel}</h1>

              <p className="text-md md:text-xl justify-center text-center">
                {sloganLabel}
              </p>
            </div>
            <div className="pt-8 text-base font-semibold leading-7 self-center inlin">
              <img
                src={orbisLogo}
                className="w-48 place-self-center"
                alt="Orbis Technology"
              />
            </div>
          </div>
        </div>
        <div className="collapse md:visible md:my-auto">
          <img
            src={bgImage}
            className="h-0 md:h-[90%] md:w-full invisible md:visible rounded-md shadow-sm"
            alt="VIA Asesores"
          />
        </div>
      </div>
    );
  };

  const Slides = ({ position }) => {
    if (position !== undefined && position !== null) {
      console.log("position", position);
      const steps = [Slide001, Slide002];
      const Step = steps[position];
      return (
        <>
          <Step />
        </>
      );
    }
    return;
  };

  return (
    <>
      <div className="px-10 flex flex-row md:h-[55vh] ">
        <div
          className="flex justify-center items-center cursor-pointer group"
          onClick={() => leftSlide()}
        >
          <ChevronLeftIcon className="w-12 h-24 group-hover:text-blue-600" />
        </div>
        <div className="relative pt-6 pb-2 sm:mx-auto sm:max-w-lg md:max-w-4xl lg:max-w-screen-xl sm:px-10 md:flex md:flex-row gap-4 h-1/3 md:h-[55vh] ">
          <Slides position={slideNumber} />
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
