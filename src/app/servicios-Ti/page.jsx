"use client";
import Navbar from "@/components/Nabvar";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";

const ServiciosTiPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center">Servicios TI</h1>
      <Clientes />
      <Productos />
    </div>
  );
};

export default ServiciosTiPage;
