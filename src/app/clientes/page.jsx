"use client";
import Navbar from "@/components/Nabvar";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";
import InfoBlock from "@/components/InfoBlock";

const Clients = () => {
  return (
    <div>
      <Navbar />
      <InfoBlock
        title="CLIENTES"
        text="Nuestros aliados de negocios y nuestros Clientes están relacionados a la Banca, Salud, Telecomunicaciones, Energía, Agro-industria, Retail, Seguros, Cámaras y Gremiales, entre otros, tanto a nivel nacional e internacional. Esta diversidad de aliados responde a que los productos son adaptables a diferentes industrias."
        imageUrl="https://www.via-asesores.com/assets/img/svg/clients.svg"
        imageAlt="Imagen"
        backgroundColor="#0d566a"
        // className="bg-green-500"
      />
      <h1 className="text-center font-bold text-xl">Apartado de Clientes</h1>
      <Clientes />
      <Productos />
    </div>
  );
};

export default Clients;
