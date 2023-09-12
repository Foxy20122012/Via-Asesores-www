"use client";
import Navbar from "@/components/Nabvar";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";

const ProcessPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center">Procesos y Recaudación </h1>
      <Clientes />
      <Productos />
    </div>
  );
};

export default ProcessPage;
