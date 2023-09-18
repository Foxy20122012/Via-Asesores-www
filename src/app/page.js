"use client";

import React, { useState, useEffect } from "react"; //Funciona para leer y modificat el estado de un componente. Asi como la orientaciòn a objetos del getters y setters.
import useHasMounted from "@/hooks/useHasMounted"; //Funciona para el renderizado para que no se muestre el componente hasta que se haya cargado la pagina
import presets from "../utils/globalPresets"
import Loading from '@/components/Loading';



import Clientes from "@/components/Clientes";
import Footer from "@/components/Footer";
import Jumbotron from "@/components/Jumbotron";
import Navbar from "@/components/Nabvar";
import Productos from "@/components/Productos";

export default function Home() {

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return  <Loading />;
  }

  return (
    <>
      <Navbar />
      <Jumbotron />
      <Clientes />
      <Productos />
      <Footer />
    </>
  );
}
