"use client";
import Navbar from "@/components/Nabvar";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";

const NosotrosPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center">Apartado de Nosotros </h1>
      <Clientes />
      <Productos />
    </div>
  );
};

export default NosotrosPage;
