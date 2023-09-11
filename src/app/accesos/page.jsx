"use client";
import Cards from "@/components/Cards";
import Navbar from "@/components/Nabvar";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";
import InfoBlock from "@/components/InfoBlock";

const tarjetas = [
  {
    imageUrl:
      "https://www.via-asesores.com/logos/logo_horizontal/smartmonitor_horizontal_logo.svg",
    imageAlt: "Smart Monitor",
    title: "smart monitor",
    description:"Monitoreo proactivo de su infraestructura de: red, base de datos, web site, eMail, entre otros, ayudando a lograr la continuidad del negocio.",
    linkUrl: "https://www.via-asesores.com/smartmonitor/",
  },
  {
    imageUrl:
      "https://www.via-asesores.com/logos/logo_horizontal/smartproject_horizontal_logo.svg",
    imageAlt: "Smart Project",
    title: "smart Project",
    description:
      "Administre sus proyectos en una sola aplicación: gantt, tareas, reuniones, acuerdos, costos, personal, y más.",
    linkUrl: "https://www.via-asesores.com/smartproject",
  },
  {
    imageUrl:
      "https://www.via-asesores.com/logos/logo_horizontal/smartanalytics_horizontal_logo.svg",
    imageAlt: "Smart Analytics",
    title: "Smart Analytics",
    description:
      "Genere dashboard gerenciales en solo dos horas para la toma de decisiones.",
    linkUrl: "https://qa.via-asesores.com/smartanalytics",
  },
  {
    imageUrl:
      "https://www.via-asesores.com/logos/logo_horizontal/smarterp_horizontal_logo.svg",
    imageAlt: "Smart ERP",
    title: "Smart ERP",
    description:
      "Gestione los procesos administrativos financieros integrados, haciendo más eficiente la gestión de su negocio.",
    linkUrl: "https://qa.via-asesores.com/sp_login",
  },
  {
    imageUrl:
      "https://www.via-asesores.com/logos/logo_horizontal/smartoperation_horizontal_logo.svg",
    imageAlt: "Smart Operation",
    title: "Smart Operation",
    description:
      "Administre y controle las tareas asignadas al personal (interno o externo) fuera de la empresa y control del inventario utilizado.",
    linkUrl: "https://gt.via-asesores.com/smartoperation",
  },
  {
    imageUrl:
      "https://www.via-asesores.com/logos/logo_horizontal/smartbuy_horizontal_logo.svg",
    imageAlt: "Smart Buy",
    title: "Smart Buy",
    description:
      "Reduzca costos en la adquisición de productos y servicios, utilizando métodos de subasta inversa.",
    linkUrl: "https://gt.via-asesores.com/desarrollo/smartbuy/",
  },
  {
    imageUrl:
      "https://www.via-asesores.com/logos/logo_horizontal/smartdeveloper_horizontal_logo.svg",
    imageAlt: "Smart Developer",
    title: "Smart Developer",
    description:
      "Enfóquese en el desarrollo de su Core Business, permitiendo que les apoyemos en el desarrollo de catálogos, consultas, reportes y dashboards",
    linkUrl: "https://gt.via-asesores.com/smartdeveloper",
  },
  {
    imageUrl:
      "https://www.via-asesores.com/logos/logo_horizontal/smartprocess_horizontal_logo.svg",
    imageAlt: "Smart Process",
    title: "Smart Process",
    description:
      "Administre sus expedientes de forma segura y eficiente, definiendo flujos según su tipificación simplificando la gestión de documentos.",
    linkUrl: "https://www.via-asesores.com/smartprocess",
  },
  {
    imageUrl:
      "https://www.via-asesores.com/logos/logo_horizontal/mycity_horizontal_logo.svg",
    imageAlt: "My City",
    title: "Smart City",
    description:
      "Incremente la recaudación por multas de tránsito, en un sistema integrado con SAT y cobro con TDC/TDD.",
    linkUrl: "https://gt.mycitygt.com/mycity/",
  },
  {
    imageUrl:
      "https://www.via-asesores.com/logos/logo_horizontal/smartcollector_horizontal_logo.svg",
    imageAlt: "Smart Collector",
    title: "Smart Collector",
    description:
      "Aumente sus ingresos permitiendo que sus deudores consulten y paguen con TDC/TDD a través de una plataforma Segura, disponible 24/7",
    linkUrl: "https://gt.via-asesores.com/smartcollector",
  },
  {
    imageUrl:
      "https://www.via-asesores.com/logos/logo_horizontal/smartce_horizontal_logo.svg",
    imageAlt: "Smart CE",
    title: "Smart CE",
    description:
      "Eficiencia y control en la facturación y cobro de Comercializadoras Eléctricas, formulando la manera de realizar los cobros",
    linkUrl: "https://qa.via-asesores.com/smartce",
  },
];

const Accesos = () => {
  return (
    <div>
      <Navbar />
      <InfoBlock
        title="Accesos"
        text="Nuestra cartera de productos y servicios permite la mejora de procesos, de la productividad y eficiencia; así como la toma de decisiones oportuna para una mejora continua en diferentes tipos de industria."
        imageUrl="https://www.via-asesores.com/assets/img/svg/Authentication_Monochromatic.svg"
        imageAlt="Imagen"
      />

      <div className="flex flex-col  md:flex-row md:flex-wrap justify-center">
        {tarjetas.map((tarjeta, index) => (
          <Cards
            key={index}
            imageUrl={tarjeta.imageUrl}
            imageAlt={tarjeta.imageAlt}
            title={tarjeta.title}
            description={tarjeta.description}
            linkUrl={tarjeta.linkUrl}
          />
        ))}
      </div>

      <Clientes />
      <Productos />
    </div>
  );
};

export default Accesos;
