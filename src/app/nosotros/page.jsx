"use client";
import Navbar from "@/components/Nabvar";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";
import InfoFusion from "@/components/InfoFusion";
import InfoBlock from "@/components/InfoBlock";
import Cards from "@/components/Cards";
import CardInfo from "@/components/CardInfo";


const NosotrosPage = () => {
  const Nosotros =[
    {
      imageUrl:
        "https://www.via-asesores.com/assets/img/svg/company.svg",
      imageAlt: "Organización",
      title: "Profesionalismo",
      description:
        "Compromiso, entrega y dedicación personalizado",
      linkUrl: "",
    },{
      imageUrl:
        "https://www.via-asesores.com/assets/img/svg/company2.svg",
      imageAlt: "",
      title: "Organización",
      description:
        "Planificación y Aseosria a nuestros Clientes.",
      linkUrl: "",
    },
    {
      imageUrl:
        "https://www.via-asesores.com/assets/img/svg/company3.svg",
      imageAlt: "",
      title: "Adaptabilidad",
      description:
        "Software a la medida de las necesidades de nuestros clientes.",
      linkUrl: "",
    },
  ]
  const nosotrosCard = [
    {
      title: "Origenes:",
      text: "Somos una empresa que nace en 2001, dedicada al análisis, diseño y soluciones de negocios, a través de herramientas tecnológicas de calidad mundial. Somos un equipo de profesionales multidisciplinarios, especializados en diferentes materias.",
    },
    {
      title: "Cartera de Productos:",
      text: "Nuestra cartera de productos y servicios permite la mejora de procesos, de la productividad y eficiencia; así como la toma de decisiones oportuna para una mejora continua en diferentes tipos de industria.",
    },
    {
      title: "Nuestros Aliados:",
      text: "Nuestros aliados de negocios (clientes) están relacionados a la Banca, Salud, Energía, Telecomunicaciones, Agro-industria, Retail, Seguros, Cámaras y Gremiales, entre otros, tanto a nivel nacional e internacional.",
    },
    
  ];

  return (
    <div>
      <Navbar />
      
      <InfoFusion
        title="NOSOTROS"
        text="Somos una empresa que nace en 2001, dedicada al análisis, diseño y soluciones de negocios,
         a través de herramientas tecnológicas de calidad mundial. Desarrollos A La Medida
         A través del análisis, diseño, desarrollo de tecnología. Administración de Proyectos.
         Formación empresarial."
        imageUrl="Nosotros.jpeg"
        imageAlt="Descripción de la imagen personalizada"
      />
      
      <InfoBlock
        title="Apoyamos en distinstas áreas de la organización."
        text="Consultoría de IT.
        Rediseño de procesos.
        Elaboración de DERCAS  Documento de especificaciones y criterios de aceptación.
        Administración de Proyectos.
        Formación empresarial. "
        imageUrl="https://www.via-asesores.com/assets/img/orbis/Orbis-Technology-VIASA-456x293.png"
        imageAlt="Servicios"
        backgroundColor="#0d566a"
        // className="bg-green-500"
      />
      <div className="flex flex-col  md:flex-row md:flex-wrap md:flex md:justify-center justify-center">
        {Nosotros.map((Nosotros, index) => (
          <Cards
            key={index}
            imageUrl={Nosotros.imageUrl}
            imageAlt={Nosotros.imageAlt}
            title={Nosotros.title}
            description={Nosotros.description}
            linkUrl={Nosotros.linkUrl}
          />
        ))}
      </div>

      <div className="flex flex-col  md:flex-row md:flex-wrap md:flex md:justify-center justify-center">
        {nosotrosCard.map((nosotrosCard, index) => (
          <CardInfo key={index} title={nosotrosCard.title} text={nosotrosCard.text} />
        ))}
      </div>

      <Clientes />
      <Productos />
    </div>
  );
};

export default NosotrosPage;
