import React from "react";

const Cards = (props) => {
  const handleCardClick = () => {
    window.location.href = props.linkUrl; // Redirige al enlace cuando se hace clic en la tarjeta
  };

  return (
    <div
      className="m-5 max-w-sm"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }} // Cambia el cursor a una mano cuando se pasa sobre la tarjeta
    >
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        <div
          className="bg-sky-700 h-1 w-full" // Línea de color en la parte superior sin redondeo
        ></div>
        <img
          className="w-full h-48 object-fit md:h-48" // Ajusta la altura aquí (por ejemplo, h-48)
          src={props.imageUrl}
          alt={props.imageAlt}
        />
        <div className="p-4 h-24 overflow-hidden">
          {" "}
          {/* Ajusta la altura aquí (por ejemplo, h-24) */}
          <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 hover:no-underline uppercase">
            {props.title}
          </h1>
          <p className="mb-2 font-normal text-gray-700  two-lines-ellipsis">
            {props.description}
          </p>
          {/* Eliminamos el botón de "Leer Más" ya que ahora toda la tarjeta es un enlace */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
