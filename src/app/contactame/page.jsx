"use client";
import Navbar from "@/components/Nabvar";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";
import InfoFusion from "@/components/InfoFusion";
import ContactForm from "@/components/Contactame";



const Contactame = () => {
  return (
    <div>
      <Navbar />
      <InfoFusion
        title="Contáctenos"
        text="Será un gusto poder atender su solicitud. Favor de completar el siguiente formulario y en breve nos comunicaremos con usted."
        imageUrl="https://www.via-asesores.com/assets/img/svg/ubi.svg"
        imageAlt="Descripción de la imagen personalizada"
      />
      <div>
      <ContactForm/>
      </div>
      <Clientes />
      <Productos />
    </div>
  );
};

export default Contactame;
