"use client";
import Navbar from "@/components/Nabvar";
import Carousel from "@/components/Carousel";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";

const ProcessPage = () => {

  const slides = [
    {
      productLogo: "https://www.via-asesores.com/logos/logo_horizontal/smartprocess_horizontal_logo.svg",
      sinceLabel: "beneficios ",
      sloganLabel: "Gestión de procesos (expedientes) clasificando los procesos y configurando las fases y el flujo que debe ejecutarse en un tiempo determinado. Los documentos de cada proceso se almacenan directamente en la plataforma, convirtiendose en un archivo digital agilizando el proceso y reduce tiempos y costos. ",
      slogans: [
        "Gestionar los procesos internos.",
        "Visualizar los documentos digitalizados durante el proceso. ",
        "Seguimiento ágil para determinar los procesos que se encuentran en el tiempo establecido o que tienen algún retraso.",
        "Seguridad en cada una de las fases para que solo usuarios autorizados puedan realizar los cambios.",
        "Verificación de requisitos obligatorios en las fases que son necesarias."
        // Otros eslóganes
      ],
      logos: [
        // "",
        // "URL_del_logo_1_2",
        // Otros logotipos
      ],
      bgImage: "/Smart Process.jpeg",
    },
    {
      productLogo: "https://www.via-asesores.com/logos/logo_horizontal/mycity_horizontal_logo.svg",
      sinceLabel: "beneficios ",
      sloganLabel: "Incremente la recaudación de multas de tránsito a través de recepción de pagos con Tarjetas de Crédito o Débito. La integración con la SAT permite que las personas fuera del municipio no evadan el pago de infracciones. Generación del Recibo el 7E agilizando el proceso de pago. ",
      slogans: [
        "Recepción de pagos con tarjetas de crédito/débito.",
        "Emisión de solvencia municipal.",
        "Dashboard de seguimiento a: ingresos, infracciones, resultados por agentes, sucesos",
        "Puede grabarse el reglamento interno, adicional al nacional.",
        "Cálculo diario de la mora de la multa.",
        "Consulta en línea de infracciones.",
        "Permite adjuntar imágenes de la infracción."
        // Otros eslóganes
      ],
      logos: [
        // "",
        // "URL_del_logo_1_2",
        // Otros logotipos
      ],
      bgImage: "/My City.jpeg",
    },
    {
      productLogo: "https://www.via-asesores.com/logos/logo_horizontal/smartcollector_horizontal_logo.svg",
      sinceLabel: "beneficios ",
      sloganLabel: "Agiliza la recepción de pagos a través de TDC/TDD, permitiendo que sus deudores consulten y paguen lo cual facilita el proceso a las personas e incrementando los ingresos.",
      slogans: [
        "Cumplimiento con el decreto 5-2021 (Gobierno).",
        "Recibe pago con tarjetas de crédito/débito. ",
        "Incremento de ingresos al facilitar el pago.",
        "Generación de comprobante de pago por correo electrónico.",
        "Dashboard para análisis de los ingresos por rubro."
        // Otros eslóganes
      ],
      logos: [
        // "",
        // "URL_del_logo_1_2",
        // Otros logotipos
      ],
      bgImage: "/Smart Collector.jpeg",
    },
    {
      productLogo: "https://www.via-asesores.com/logos/logo_horizontal/smartce_horizontal_logo.svg",
      sinceLabel: "beneficios ",
      sloganLabel: "Gestione los procesos de facturación y cobro de su Comercializadora Eléctrica, formulando de una forma precisa y sencilla los rubros que cobra a cada uno de sus clientes, dando seguridad en los procesos de cálculo de potencia, energía, peaje, desvíos, y mucho más.",
      slogans: [
        "Carga de lecturas en 5 minutos máximo.",
        "Control de vigencia de contratos.",
        "Presentación de informes gerenciales. ",
        "Análisis de promedio mensual facturado y consumido.",
        "Asociación de entidad financiera, distribuidora y municipalidad.",
        "Información para el AMM: potencia, tipo de medición e información del medidor."
        // Otros eslóganes
      ],
      logos: [
        // "",
        // "URL_del_logo_1_2",
        // Otros logotipos
      ],
      bgImage: "/Smart CE.jpeg",
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


export default ProcessPage;
