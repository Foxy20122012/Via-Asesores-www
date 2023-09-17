"use client";
import Navbar from "@/components/Nabvar";
import Carousel from "@/components/Carousel";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";
import Footer from "@/components/Footer";

const AdminPage = () => {


  const slides = [
    {
      productLogo: "https://www.via-asesores.com/logos/logo_horizontal/smartanalytics_horizontal_logo.svg",
      sinceLabel: "BENEFICIOS ",
      sloganLabel: "Analice los KPI de las áreas de negocio (departamentos) de su empresa, definiendo los dashboard con sus gráficas que le permitan tomar mejores decisiones desde  Smart Analitycs.",
      slogans: [
        "Genere dashboard en 2 horas.",
        "Dashboard dinámico por departamento",
        "Seguridad en el acceso a los dashboard por área de negocio.",
        "Adaptable a múltiples bases de datos.",
        "Actualización en tiempo real.",
        "Seguridad en los datos de la empresa. "
        // Otros eslóganes
      ],
      logos: [
        // "",
        // "URL_del_logo_1_2",
        // "URL_del_logo_1_2",
        // Otros logotipos
      ],
      bgImage: "/Smart Analytics.jpeg",
    },
    {
      productLogo: "https://www.via-asesores.com/logos/logo_horizontal/smarterp_horizontal_logo.svg",
      sinceLabel: "MODULOS",
      sloganLabel: "Integración de los procesos administrativos y financieros de la empresa que reduce tiempos y costos en los diferentes departamentos, cumpliendo a la vez con los aspectos legales solicitados por la SAT, IGSS, entre otras. ",
      slogans: [
        "Presupuestos",
        "Contabilidad",
        "Facturación",
        "Compras",
        "Inventarios",
        "Cuentas por Pagar",
        "Cuentas por Cobrar",
        "Activos Fijos"
       
      ],
      logos: [
        // "",
        // "URL_del_logo_2_",
        // Otros logotipos
      ],
      bgImage: "/Smart ERP.jpeg",
    },
    {
      productLogo: "https://www.via-asesores.com/logos/logo_horizontal/smartoperation_horizontal_logo.svg",
      sinceLabel: "beneficios",
      sloganLabel: "Es una plataforma de control de tareas a realizar fuera de oficina, que permite verificar el desarrollo de las visitas efectuadas, así como el inventario utilizado en cada una, adjuntando fotografías y registrando tiempos y posición GPS de cada visita. ",
      slogans: [
        "Control de visitas y personal.",
        "Registro de fotografías y posición GPS.",
        "Clasificación según tipo de visita y tipo de gestión realizada o departamento responsable.",
        "Sistema de notificaciones o mensajes internos dentro de la aplicación.",
        "Reportería en tiempo real.",
        
        // Otros eslóganes
      ],
      logos: [
        // "",
        // "URL_del_logo_2_",
        // Otros logotipos
      ],
      bgImage: "/Smart Operation.jpeg",
    },
    {
      productLogo: "https://www.via-asesores.com/logos/logo_horizontal/smarterp_horizontal_logo.svg",
      sinceLabel: "MODULOS",
      sloganLabel: "Integración de los procesos administrativos y financieros de la empresa que reduce tiempos y costos en los diferentes departamentos, cumpliendo a la vez con los aspectos legales solicitados por la SAT, IGSS, entre otras. ",
      slogans: [
        "Presupuestos",
        "Contabilidad",
        "Facturación",
        "Compras",
        "Inventarios",
        "Cuentas por Pagar",
        "Cuentas por Cobrar",
        "Activos Fijos"
       
      ],
      logos: [
        // "",
        // "URL_del_logo_2_",
        // Otros logotipos
      ],
      bgImage: "/Smart ERP.jpeg",
    },
    {
      productLogo: "https://www.via-asesores.com/logos/logo_horizontal/smartbuy_horizontal_logo.svg",
      sinceLabel: "beneficios",
      sloganLabel: "Reduzca los costos de adquisición de productos o servicios, con parámetros y requerimientos definidos para procesos abiertos o privados, garantizando la integridad del evento. ",
      slogans: [
        "Garantía en la optimización de costos.",
        "Criterios definidos por evento.",
        "Transparencia en la gestión de compra.",
        "Notificaciones de parte de administración hacia oferentes.",
        "Resolución y ponderación según criterios definidos.",
        "Reporte de auditoría del evento."
        // Otros eslóganes
      ],
      logos: [
        // "",
        // "URL_del_logo_2_",
        // Otros logotipos
      ],
      bgImage: "/Smart Buy.jpeg",
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
      <Footer />
    </div>
  );
};

export default AdminPage;
