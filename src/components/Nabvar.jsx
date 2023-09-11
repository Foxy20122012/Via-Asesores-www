const Navbar = () => {
  const title = 'Asesores'
  
  const Marca = () => {
    return (
      <a href="https://www.via-asesores.com" className="flex items-center">
        <img src="https://www.via-asesores.com/logos/logo_vertical/viaasesores_vertical_logo.svg" className="h-12 mr-3" alt="VIA Asesores" />
        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-300 dark:text-white">{ title }</span> */}
      </a>
    )
  }

  const AccesosButton = () => {
    const accesosLabel = 'Accesos'

    return (
      <a href="/accesos" className="text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800">{ accesosLabel }</a>
    )
  }

  const Contactos = () => {
    return (
      <>
        <a href="mailto:guatemala@via-asesores.com" className="text-gray-400 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 invisible md:visible">guatemala@via-asesores.com</a>
        <a href="telto:+502 22971267" className="text-gray-400 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800  invisible md:visible">+502 2297 1267</a>
      </>
    )
  }

  return (
    <nav className="bg-sky-900 border-sky-200 rounded-lg m-1 dark:bg-gray-900 shadow-md">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <Marca />
        <div className="flex items-center md:order-2">
          <Contactos />
          <AccesosButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
