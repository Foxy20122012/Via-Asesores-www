"use client";
import Navbar from "@/components/Nabvar";
import Carousel from "@/components/Carousel";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";

const AdminPage = () => {
  return (
    <div>
      <Navbar />
   
      <Carousel/>
      <Clientes />
      <Productos />
    </div>
  );
};

export default AdminPage;
