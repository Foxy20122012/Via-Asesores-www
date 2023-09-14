"use client";
import Navbar from "@/components/Nabvar";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";
import InfoBlock from "@/components/InfoBlock";
import Cards from "@/components/Cards";

const Clients = () => {
  const clientsNacionales = [
    {
      imageUrl:
        "https://www.via-asesores.com/assets/img/clients/banco_industrial.png",
      imageAlt: "Banco Industrial",
      title: "Banco Industrial",
      description: "",
      linkUrl: "https://www.bienlinea.bi.com.gt/InicioSesion/Inicio/Autenticar",
    },
    {
      imageUrl: "https://www.via-asesores.com/assets/img/clients/bantrab.png",
      imageAlt: "Bantrad",
      title: "Bantrad",
      description: "",
      linkUrl: "https://www.bantrab.com.gt/",
    },
    {
      imageUrl: "https://www.via-asesores.com/assets/img/clients/banco_gyt.png",
      imageAlt: "Banco GyT Continental",
      title: "Banco GyT Continental",
      description: "",
      linkUrl: "https://www.gtc.com.gt/",
    },
    {
      imageUrl: "https://www.via-asesores.com/assets/img/clients/banco_chn.png",
      imageAlt: "Banco CHN",
      title: "Banco CHN",
      description: "",
      linkUrl: "https://www.chn.com.gt/",
    },
    {
      imageUrl: "https://www.via-asesores.com/assets/img/clients/movistar.png",
      imageAlt: "Telefónica Movistar",
      title: "Telefónica Movistar",
      description: "",
      linkUrl: "https://www.telefonica.com/es/nosotros/marcas/movistar/",
    },
    {
      imageUrl: "https://www.via-asesores.com/assets/img/clients/walmart.png",
      imageAlt: "Walmart",
      title: "Walmart",
      description: "",
      linkUrl:
        "https://www.walmart.com.gt/?utm_source=search_paid&utm_medium=cpa&utm_campaign=aonsearch_ecommerce_ecommerce&utm_content=txt_ecommerce_na_na&utm_term=kw_marca_Home&utm_source=search_paid&utm_medium=cpa&utm_campaign=aonsearch_ecommerce&utm_content=txt_ecommerce_na_na&utm_term=walmart_Home&gclid=CjwKCAjwu4WoBhBkEiwAojNdXttiZ9DclIRcqf5FRYrPiWH9IVjAknoUS2bPFLr7NidBxkweOAfyNRoCj0MQAvD_BwE",
    },
  ];

  const clientesInternacionales = [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/25/Telefonica_Logo.svg",
      imageAlt: "",
      title: "Telefonica",
      description: "",
      linkUrl: "",
    },
    {
      imageUrl:
        "https://geoinn.com/wp-content/uploads/2021/06/banco-nacional-logo.png",
      imageAlt: "",
      title: "Banco Nacional",
      description: "Banco Nacional",
      linkUrl: "",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2AqCFpUD8OTW3NT1xJYxiotNVSWckAUYiO3UsMkJaabGxabOAM18i3yWkni0mY8GnPBQ&usqp=CAU",
      imageAlt: "Prysma",
      title: "Prysma",
      description: "",
      linkUrl: "",
    },
    
    
  ];

  return (
    <div>
      <Navbar />
      <InfoBlock
        title="CLIENTES"
        text="Nuestros aliados de negocios y nuestros Clientes están relacionados a la Banca, Salud, Telecomunicaciones, Energía, Agro-industria, Retail, Seguros, Cámaras y Gremiales, entre otros, tanto a nivel nacional e internacional. Esta diversidad de aliados responde a que los productos son adaptables a diferentes industrias."
        imageUrl="https://www.via-asesores.com/assets/img/svg/clients.svg"
        imageAlt="Imagen"
        backgroundColor="#0d566a"
        // className="bg-green-500"
      />
      <h1 className="text-center font-bold text-3xl my-5">
        Clientes Nacionales
      </h1>
      <div className="flex flex-col  md:flex-row md:flex-wrap md:flex md:justify-center justify-center">
        {clientsNacionales.map((clientsNacionales, index) => (
          <Cards
            key={index}
            imageUrl={clientsNacionales.imageUrl}
            imageAlt={clientsNacionales.imageAlt}
            title={clientsNacionales.title}
            description={clientsNacionales.description}
            linkUrl={clientsNacionales.linkUrl}
          />
        ))}
      </div>
      <h1 className="text-center font-bold text-3xl my-5">
        Clientes Internacionales
      </h1>¨
      <div className="flex flex-col  md:flex-row md:flex-wrap md:flex md:justify-center justify-center">
        {clientesInternacionales.map((clientesInternacionales, index) => (
          <Cards
            key={index}
            imageUrl={clientesInternacionales.imageUrl}
            imageAlt={clientesInternacionales.imageAlt}
            title={clientesInternacionales.title}
            description={clientesInternacionales.description}
            linkUrl={clientesInternacionales.linkUrl}
          />
        ))}
      </div>
      <Clientes />
      <Productos />
    </div>
  );
};

export default Clients;
