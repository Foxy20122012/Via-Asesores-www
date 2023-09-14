"use client";
import Navbar from "@/components/Nabvar";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";
import InfoFusion from "@/components/InfoFusion";
import ContactForm from "@/components/Contactame";
import GoogleMap from "@/components/GoogleMap";

const Contactame = () => {
  const centroHistorico = { latitude: 14.5889022, longitude: -90.5228879 };
  return (
    <div>
      <Navbar />
      <InfoFusion
        title="Contáctenos"
        text="Será un gusto poder atender su solicitud. Favor de completar el siguiente formulario y en breve nos comunicaremos con usted."
        imageUrl="https://www.via-asesores.com/assets/img/svg/ubi.svg"
        imageAlt="Descripción de la imagen personalizada"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Columna Izquierda */}
        <div className="p-4">
          {/* Coloca aquí el contenido que deseas en la columna izquierda */}

          <div>
            <h1>Título de la Página</h1>
            <GoogleMap
              latitude={centroHistorico.latitude}
              longitude={centroHistorico.longitude}
            />
          </div>

          {/* Agrega más elementos según tus necesidades */}
        </div>

        {/* Columna Derecha */}
        <div className="p-4">
          {/* Componente de formulario de contacto */}
          <ContactForm />
        </div>
      </div>

      <Clientes />
      <Productos />
    </div>
  );
};

export default Contactame;
