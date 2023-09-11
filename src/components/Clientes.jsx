import { useState } from "react"

const Clientes = () => {
  const clientes = [
    { tipoCliente: 'Nacionales', nombre: 'Banco Industrial', logo: "https://www.via-asesores.com/assets/img/clients/banco_industrial.png" },
    { tipoCliente: 'Nacionales', nombre: 'Banco de los Trabajadores', logo: "https://www.via-asesores.com/assets/img/clients/bantrab.png" },
    { tipoCliente: 'Nacionales', nombre: 'Banco GyT Continental', logo: "https://www.via-asesores.com/assets/img/clients/banco_gyt.png" },
    { tipoCliente: 'Nacionales', nombre: 'Banco CHN', logo: "https://www.via-asesores.com/assets/img/clients/banco_chn.png" },
    { tipoCliente: 'Nacionales', nombre: 'Naturaceiter', logo: "https://www.via-asesores.com/assets/img/clients/naturaceites.png" },
    { tipoCliente: 'Nacionales', nombre: 'Telefónica Movistar', logo: "https://www.via-asesores.com/assets/img/clients/movistar.png" },
    { tipoCliente: 'Nacionales', nombre: 'Ingenio Magdalena', logo: "https://www.via-asesores.com/assets/img/clients/magdalena.png" },
    { tipoCliente: 'Nacionales', nombre: 'Tigo', logo: "https://www.via-asesores.com/assets/img/clients/tigo.png" },
    { tipoCliente: 'Nacionales', nombre: 'Walmart', logo: "https://www.via-asesores.com/assets/img/clients/walmart.png" },
    { tipoCliente: 'Nacionales', nombre: 'Meykos', logo: "https://www.via-asesores.com/assets/img/clients/meykos.png" },
    { tipoCliente: 'Nacionales', nombre: 'Aseguradora General', logo: "https://www.via-asesores.com/assets/img/clients/aseguradora_general.png" },
    { tipoCliente: 'Nacionales', nombre: 'GNC', logo: "https://www.via-asesores.com/assets/img/clients/gnc.png" },
    { tipoCliente: 'Nacionales', nombre: '5B', logo: "https://www.via-asesores.com/assets/img/clients/5b.png" },
    { tipoCliente: 'Nacionales', nombre: 'Agexport', logo: "https://www.via-asesores.com/assets/img/clients/agexport.png" },
    { tipoCliente: 'Nacionales', nombre: 'Administrador del Mercado Mayorista', logo: "https://www.via-asesores.com/assets/img/clients/amm.png" },
    { tipoCliente: 'Instituciones Públicas' },
    { tipoCliente: 'Internacionales' },

  ]

  const tiposCliente = [...new Set(clientes.map((item) => item.tipoCliente))]

  const [selectedCliente, setSelectedCliente] = useState(tiposCliente[0])

  return (
    <section className="md:px-12 md:mt-10 border rounded-lg my-16">
      <div className="font-medium text-gray-500 my-10">Clientes</div>

      {
        tiposCliente.map(tipoCliente => {
          return (
            <div
              key={tipoCliente}
              onClick={() => setSelectedCliente(tipoCliente)}
              className={`${tipoCliente === selectedCliente ? "bg-sky-100 text-sky-800" : "bg-gray-100 text-gray-400"}  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-sky-700 dark:text-white mb-2 mr-2 cursor-pointer`}>
              {tipoCliente}
            </div>
          )
        })
      }


      <ul
        className="w-full md:w-screen m-2 lg:w-full flex justify-between items-start mb-2 space-x-3 overflow-x-scroll stories p-4"
      >
        {
          clientes.filter(cl => cl.tipoCliente === selectedCliente).map(cliente => {
            return (
              <li key={`li-${cliente.nombre}`} className="flex flex-none flex-col items-center space-y-1">
                <div key={cliente.nombre} className="h-12 p-1">
                  <img src={cliente.logo} className="h-full w-full max-h-12 grayscale opacity-60 rounded-md border-2 border-dashed" alt={cliente.nombre} />
                </div>
              </li>
            )
          })
        }

      </ul>
    </section>
  )
}

export default Clientes
