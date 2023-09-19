"use client";
//Apartado de Hooks
import React, { useState, useEffect } from "react"; //Funciona para leer y modificat el estado de un componente. Asi como la orientaciòn a objetos del getters y setters.
import useHasMounted from "@/hooks/useHasMounted"; //Funciona para el renderizado para que no se muestre el componente hasta que se haya cargado la pagina

//Apartado de Componentes
import Loading from '@/components/Loading';
import Clientes from "@/components/Clientes";
import Footer from "@/components/Footer";
import Jumbotron from "@/components/Jumbotron";
import Navbar from "@/components/Nabvar";
import Productos from "@/components/Productos";
import InfoBlock from "@/components/InfoBlock";
import InfoFusion from "@/components/InfoFusion";

export default function Home() {

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return  <Loading />;
  }

  return (
    <>
      <Navbar />
      
      <InfoBlock
        title="Permitanos ser su aliado de negocios"
        text="Sera un gusto poder atender su solicitud. Complete el siguiente formulario y en breve nos comunicaremos con usted"
        imageUrl="https://www.via-asesores.com/assets/img/svg/about1.png"
        imageAlt="INICIO"
        backgroundColor="#0d566a"
        // className="bg-green-500"
      />
      <Jumbotron />
      <div className="mt-8">
        <Clientes />
      </div>
      <Productos />
      <Footer />
    </>
  );
}
