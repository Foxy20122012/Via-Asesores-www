const InfoFusion = (props) => {
  const { title, text, imageUrl, imageAlt } = props;
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row">
        {/* Columna izquierda para el título y el texto */}
        <div className="md:w-1/2 md:pr-4 ">
          <h2 className="text-2xl font-bold md:mt-36 text-center uppercase ">{title}</h2>
          <p className="text-gray-700 text-center md:ml-10 text-justify">
            {text}
          </p>
        </div>

        {/* Columna derecha para la imagen */}
        <div className="md:w-1/2 mt-4 md:mt-0 ml-10">
          <img
            src={imageUrl}
            alt="Descripción de la imagen"
            className={imageAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoFusion;
