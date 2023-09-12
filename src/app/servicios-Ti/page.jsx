"use client";
import Navbar from "@/components/Nabvar";
import Carousel from "@/components/Carousel";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";

const ServiciosTiPage = () => {


  const slides = [
    {
      productLogo: "https://www.via-asesores.com/logos/logo_horizontal/smartmonitor_horizontal_logo.svg",
      sinceLabel: "beneficios ",
      sloganLabel: "Asegure la continuidad de negocio al monitorear sus principales Items en tiempo real, siendo más proactivo en la resolución de eventos. Monitoreo proactivo de su infraestructura de: red, base de datos, web site, eMail, entre otros, ayudando a lograr la  continuidad del negocio. ",
      slogans: [
        "Monitoreo de red: routers, servidores, impresoras wi-fi, y más.",
        "Avisos de caídas de Bases de Datos.",
        "Chequeo de funcionamiento de correo electrónico (recepción y envío).",
        "Revisión de página web habilitada para evitar errores de conexión.",
        "Dashboards de lecturas diarias, semanales y mensuales.",
        "Envío de mensajes de forma inmediata ante cualquier eventualidad. "
        // Otros eslóganes
      ],
      logos: [
        // "",
        // "URL_del_logo_1_2",
        // Otros logotipos
      ],
      bgImage: "/Smart Monitor.jpeg",
    },
    {
      productLogo: "https://www.via-asesores.com/logos/logo_horizontal/smartproject_horizontal_logo.svg",
      sinceLabel: "beneficios",
      sloganLabel: "Su Oficina de Proyectos y sus PMs podrán gestionar su portafolio de proyectos creando un ecosistema de planificación y supervisión, logrando la visualización en tiempo real del avance, flujo de efectivo, reuniones,  acuerdos, tareas y demás gestiones  operativas en una sola herramienta, haciendo más productiva y estratégica su gestión.",
      slogans: [
        "Control detallado en tiempo real de  avances del proyecto.",
        "Control de presupuesto y gastos.",
        "Asignación de tareas y seguimiento personalizado.",
        "Reportería automática.",
        "Dashboards dinámicos.",
        "Acuerdos de las reunions.",
        "Tareas asignadas desde el Proyecto o en una reunion."
        // Otros eslóganes
      ],
      logos: [
        // "",
        // "URL_del_logo_1_2",
        // "URL_del_logo_1_2",
        // Otros logotipos
      ],
      bgImage: "/Smart Project.jpeg",
    },
    {
      productLogo: "https://www.via-asesores.com/logos/logo_horizontal/smartoutsourcing_horizontal_logo.svg",
      sinceLabel: "beneficios ",
      sloganLabel: "Contamos con desarrolladores de software con experiencia en las diferentes herramientas de última generación. La experiencia obtenida en las diferentes industrias, agregan valor a  los proyectos en los que son asignados por nuestros clientes. Firmamos acuerdos de confidencialidad con cada uno de nuestros clientes, garantizando la seguridad de datos y procesos  internos.",
      slogans: [
        "Experiencia en: banca, seguros, agroindustria, retail, telcos, gobierno, sector eléctrico y otros. ",
        "Desarrollo Web, Mobile (iOS y  Android) y Oracle Developer.",
        "Herramientas de desarrollo actuales: Java, .NET, Python, mobile, entre otras. ",
        "Proyectos: en su oficina o remoto. ",
        "Consultores: Junior, Middle, Senior, Project Manager y rediseño de procesos.",
        // Otros eslóganes
      ],
      logos: [
        // "",
        // "URL_del_logo_1_2",
        // "URL_del_logo_1_2",
        // Otros logotipos
      ],
      bgImage: "/Outsourcing Via.jpeg",
    },
    {
      productLogo: "https://www.via-asesores.com/logos/logo_horizontal/smartdeveloper_horizontal_logo.svg",
      sinceLabel: "beneficios",
      sloganLabel: "Nuestra experiencia en desarrollo de aplicaciones nos ha llevado a crear el modelo de apoyar en el desarrollo de los catálogos, consultas, reportes y Dashboards buscando agilizar el desarrollo de sus aplicaciones y que su personal interno se enfoque en los puntos específicos del Core Business, reduciendo considerablemente los tiempos de entrega de sus proyectos y costos asociados, manteniendo de esta forma el conocimiento del negocio siempre dentro de su empresa.",
      slogans: [
        "Desarrollamos los catálogos de sus aplicaciones en la mitad del tiempo de desarrollo promedio. ",
        "Generamos pantallas de consulta de seguimiento u operativas de sus sistemas para la continuidad del negocio. ",
        "Creamos los dashboard para sus sistemas con gráficos dinámicos que permitan la toma de decisiones a nivel de las diferentes gerencias.",
        "Su área de desarollo se enfoca en garantizar, mantener el conocimiento y la continuidad del negocio.",
        ""
        // Otros eslóganes
      ],
      logos: [
        // "",
        // "URL_del_logo_1_2",
        // "URL_del_logo_1_2",
        // Otros logotipos
      ],
      bgImage: "Smart Developer.jpeg",
    },
    // Puedes agregar más diapositivas aquí
  ];
  return (
    <div>
      <Navbar />
      <h1 className="text-center">Administración y Finanzas. </h1>
      <Carousel  slides={slides}/>
      <Clientes />
      <Productos />
    </div>
  );
};

export default ServiciosTiPage;
