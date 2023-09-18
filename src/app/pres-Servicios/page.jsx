"use client";
//Apartado de Hooks
import useHasMounted from "@/hooks/useHasMounted";

//Apartado de Componentes
import Loading from "@/components/Loading";
import Navbar from "@/components/Nabvar";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";
import InfoBlock from "@/components/InfoBlock";
import CardInfo from "@/components/CardInfo";
import Footer from "@/components/Footer";

const ServiciosPage = () => {
  const infoCard = [
    {
      title: "ERP:",
      text: "Conjunto de programas integrados que apoya y eficientiza las principales actividades de la organización tales como producción y logística, finanzas y contabilidad, ventas y recursos humanos",
    },
    {
      title: "Smart Operation:",
      text: "Control de staff operativo en ruta que permite verificar en cada usuario sus ubicaciones, desarrollo y tareas de las visitas establecidas, así como el inventario utilizado.",
    },
    {
      title: "Smart Analytics:",
      text: "Plataforma de Inteligencia de Negocios (BI) de sencilla adaptación según las necesidades de cada empresa, obteniendo indicadores de valor para los diferentes niveles de administración de la operación del negocio.",
    },
    {
      title: "Expedientes:",
      text: "Conocido también como Workflow o Business Process Management. Permite llevar el control de la documentación que ingresa a una oficina o empresa, asignando responsables, tiempos, por proceso y por fase, pudiendo adjuntar documentos de respaldo, informando al cliente o usuario sobre el avance de su requerimiento.",
    },
    {
      title: "Comercializadora Eléctrica",
      text: "Permite administrar la facturación a los clientes, separando energía, potencia y cobro de terceros. Capacidad para realizar cobros por medio de fórmulas para clientes o grupo de clientes, generación de información por cliente para autoservicio y control de cuentas por cobrar.",
    },
  ];

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return <Loading />;
  }
  return (
    <div>
      <Navbar />
      <InfoBlock
        title="Apoyamos en distinstas áreas de la organización."
        text="Consultoría de IT.
        Rediseño de procesos.
        Elaboración de DERCAS  Documento de especificaciones y criterios de aceptación.
        Administración de Proyectos.
        Formación empresarial. "
        imageUrl="/servicios.jpeg"
        imageAlt="Servicios"
        backgroundColor="#0d566a"
        // className="bg-green-500"
      />
      <h1 className="text-center text-xl font-bold my-5">
        Productos y Servicios{" "}
      </h1>

      <div className="flex flex-col  md:flex-row md:flex-wrap md:flex md:justify-center justify-center">
        {infoCard.map((infoCard, index) => (
          <CardInfo key={index} title={infoCard.title} text={infoCard.text} />
        ))}
      </div>

      <Clientes />
      <Productos />
      <Footer />
    </div>
  );
};

export default ServiciosPage;
