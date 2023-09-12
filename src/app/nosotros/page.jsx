"use client";
import Navbar from "@/components/Nabvar";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";
import InfoBlock from "@/components/InfoBlock";

const NosotrosPage = () => {
  return (
    <div>
      <Navbar />
      <InfoBlock
        title="Altamente Capacitados"
        text="contamos con equipo altamente capacitado en el desarrollo outsourcing en tecnologías: Oracle Developer, .NET, PHP, Java, Python y otros."
        imageUrl="https://www.via-asesores.com/assets/img/svg/Smartphone%20data_Monochromatic.svg"
        imageAlt="Imagen"
        backgroundColor="#0d566a"
        // className="bg-green-500"
      />
      <h1 className="text-center text-xl font-bold">Apartado de Nosotros </h1>
      <Clientes />
      <Productos />
    </div>
  );
};

export default NosotrosPage;
