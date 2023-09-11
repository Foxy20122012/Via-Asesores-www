const Productos = () => {
  const productos = [
    { area: 'Administración y Finanzas', nombre: 'Smart Analytics', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartanalytics_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartanalytics', visible: true },
    { area: 'Administración y Finanzas', nombre: 'Smart ERP', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smarterp_horizontal_logo.svg', url: 'https://qa.via-asesores.com/sp_login', visible: false },
    { area: 'Administración y Finanzas', nombre: 'Smart Operation', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartoperation_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartoperation', visible: false },
    { area: 'Administración y Finanzas', nombre: 'Smart Buy', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartbuy_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartbuy', visible: false },
    { area: 'Servicios de TI', nombre: 'Smart Monitor', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartmonitor_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartmonitor', visible: false },
    { area: 'Servicios de TI', nombre: 'Smart Project', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartproject_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartproject', visible: false },
    { area: 'Servicios de TI', nombre: 'Smart Outsourcing', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartoutsourcing_horizontal_logo.svg', url: 'https://www.via-asesores.com/smartoutsourcing', visible: false },
    { area: 'Servicios de TI', nombre: 'Smart Developer', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartdeveloper_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartdeveloper', visible: false },
    { area: 'Procesos y Recaudación', nombre: 'Smart Process', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartprocess_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartprocess', visible: false },
    { area: 'Procesos y Recaudación', nombre: 'My City', logo: 'https://www.via-asesores.com/logos/logo_horizontal/mycity_horizontal_logo.svg', url: 'https://qa.mycitygt.com', visible: false },
    { area: 'Procesos y Recaudación', nombre: 'Smart Collector', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartcollector_horizontal_logo.svg', url: 'https://gt.via-asesores.com/smartcollector', visible: false },
    { area: 'Procesos y Recaudación', nombre: 'Smart CE', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartce_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartce', visible: false }

  ]

  const areas = [...new Set(productos.map((item) => item.area))]

  return (
    <footer className="bg-white mt-1 dark:bg-gray-800 px-8 md:px-12 mb-16">
      <div className="font-medium text-gray-500">Productos</div>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xs:divide-2 md:divide-x-2 divide-dotted border-opacity-25 place-content-center">
        {
          areas.map((area, idxArea) => {
            return (
              <div key={idxArea} className="flex flex-row">
                {
                  productos.filter(prod => prod.area === area).map((producto, idxProducto) => {
                    return (
                      <a href={producto.url} key={idxProducto} className="h-12 p-1 m-1 rounded-md border-md hover:drop-shadow-lg hover:bg-teal-200">
                        <img src={ producto.logo }  className="h-full w-full max-h-12" alt={producto.nombre}/>
                      </a>
                    )
                  })
                }
              </div> 
            )
          })
        }
      </div>
      
    </footer>
  )
}

export default Productos
