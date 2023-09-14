'use client'
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const title = "Asesores";
  const [productosMenuVisible, setProductosMenuVisible] = useState(false);
  const [nosotrosMenuVisible, setnosotrosMenuVisible] = useState(false);

  const toggleProductosMenu = () => {
    setProductosMenuVisible(!productosMenuVisible);
  };

  const toggleNosotrosMenu = () => {
    setnosotrosMenuVisible(!nosotrosMenuVisible);
  };

  const Marca = () => {
    return (
      <a href="https://www.via-asesores.com" className="flex items-center">
        <img
          src="https://www.via-asesores.com/logos/logo_vertical/viaasesores_vertical_logo.svg"
          className="h-12 mr-3"
          alt="VIA Asesores"
        />
      </a>
    );
  };
  
  const InicioButton = () => {
    const inicioLabel = "Home";

    return (
      <a
        href="/"
        className="text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
      >
        {inicioLabel}
      </a>
    );
  };

  const ProductosButton = () => {
    const productosLabel = "Productos";

    return (
      <div className="relative">
        <button
          onClick={toggleProductosMenu}
          className="flex items-center text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
        >
          {productosLabel} <ChevronDownIcon className="w-4 h-4 " />
        </button>
        {productosMenuVisible && (
          <div className="absolute z-10 mt-2 py-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
            <a
              href="/admin-finanzas"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Administración y Finanzas
            </a>
            <a
              href="/servicios-Ti"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Servicios de TI
            </a>
            <a
              href="/process"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Procesos y Recaudación
            </a>
          </div>
        )}
      </div>
    );
  };

  const Clientes = () => {
    const clientesLabel = "Clientes";

    return (
      <a
        href="/clientes"
        className="text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
      >
        {clientesLabel}
      </a>
    );
  };

  const Nosotros = () => {
    const nosotrosLabel = "Nosotros";

    return (
      <div className="relative">
        <button
          onClick={toggleNosotrosMenu}
          className="flex items-center text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
        >
          {nosotrosLabel} <ChevronDownIcon className="w-4 h-4 " />
        </button>
        {nosotrosMenuVisible && (
          <div className="absolute z-10 mt-2 py-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
            <a
              href="/nosotros"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Nosotros
            </a>
            <a
              href="/pres-Servicios"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Prestaciones de Servicios
            </a>
            <a
              href="/noticias"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Noticias Relevantes
            </a>
          </div>
        )}
      </div>
    );
  };

  const Contactos = () => {
    return (
      <>
        <a
          href="mailto:guatemala@via-asesores.com"
          className="text-gray-400 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 invisible md:visible"
        >
          guatemala@via-asesores.com
        </a>
        <a
          href="telto:+502 22971267"
          className="text-gray-400 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800  invisible md:visible"
        >
          +502 2297 1267
        </a>
      </>
    );
  };

  const AccesosButton = () => {
    const accesosLabel = "Accesos";

    return (
      <a
        href="/accesos"
        className="text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
      >
        {accesosLabel}
      </a>
    );
  };

  const ContactameButton = () => {
    const contactameLabel = "Contactenos";

    return (
      <a
        href="/contactame"
        className="text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
      >
        {contactameLabel}
      </a>
    );
  };

  return (
    <nav className="bg-sky-900 border-sky-200 rounded-lg m-1 dark:bg-gray-900 shadow-md">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <div className="flex items-center">
          <Marca />
          <InicioButton />
          <ProductosButton />
          <Clientes />
          <Nosotros />
          <ContactameButton />
        </div>
        <div>
          <Contactos />
          <AccesosButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
