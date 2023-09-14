"use client";
import Navbar from "@/components/Nabvar";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";
import InfoFusion from "@/components/InfoFusion";

const NoticiasPage = () => {
  return (
    <div>
      <Navbar />
      
      
      <InfoFusion
        title="NOTICIAS"
        text="Para garantizar una gestión responsable y profesional de los hashtag#proyectos de hashtag#construcción, la buena hashtag#administración es de suma importancia, permitiendo tener la información y control oportuno para identificar desviaciones de todo tipo. Pero que mejor, si es a través de un sistema que permita visualizar en tiempo real el avance, flujo de efectivo, imprevistos y demás gestiones operativas."
        imageUrl="https://www.via-asesores.com/assets/img/svg/New.svg"
        imageAlt="Descripción de la imagen personalizada"
      />
      <Clientes />
      <Productos />
    </div>
  );
};

export default NoticiasPage;
