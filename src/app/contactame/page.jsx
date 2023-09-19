"use client";

//Apartado de Hooks
import useHasMounted from "@/hooks/useHasMounted";

//Apartado de Componentes
import Navbar from "@/components/Nabvar";
import Clientes from "@/components/Clientes";
import Productos from "@/components/Productos";
import InfoFusion from "@/components/InfoFusion";
import ContactForm from "@/components/Contactame";
import GoogleMap from "@/components/GoogleMap";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

const Contactame = () => {

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return  <Loading />;
  }
  const ViaAsesores = { latitude: 14.5889022, longitude: -90.5228879 };
  return (
    <div>
      <Navbar />
      <InfoFusion
        title="Contáctenos"
        text="Será un placer poder atender su solicitud. En Via Asesores, nos esforzamos por ofrecer el mejor servicio a nuestros clientes. Por favor, complete el siguiente formulario para ponerse en contacto con nosotros y háganos saber cómo podemos ayudarlo.
        Nuestro equipo de expertos está listo para responder a sus preguntas, brindarle asistencia técnica o ayudarlo con su proyecto específico. Valoramos su opinión y estamos comprometidos en brindar soluciones de alta calidad.
        No dude en ponerse en contacto con nosotros para cualquier consulta o necesidad que pueda tener. Estamos aquí para servirle y responder a sus inquietudes de manera oportuna.¡Esperamos con interés escuchar de usted pronto y trabajar juntos en su próxima tarea!"
        imageUrl="https://www.via-asesores.com/assets/img/svg/ubi.svg"
        imageAlt="Descripción de la imagen personalizada"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Columna Izquierda */}
        <div className="p-4 ">
          {/* Coloca aquí el contenido que deseas en la columna izquierda */}

          <div className="md:mt-36">
            <h1 className="text-center font-bold md:text-3xl text-xl">Via Asesores</h1>
            <p className=" md:mt-10 md:ml-12 text-justify mt-4">Puedes ubicarnos en la Avenida Las Américas 7-30 zona 13, Edificio Los Arcos, 
            Oficina 5A, Ciudad de Guatemala Para poder brindarte una Atención Personalizada.</p>
            
            <div className="md:mt-20 md:ml-8 mt-6">
              <GoogleMap
                latitude={ViaAsesores.latitude}
                longitude={ViaAsesores.longitude}
              />
            </div>
          </div>

          {/* Agrega más elementos según tus necesidades */}
        </div>

        {/* Columna Derecha */}
        <div className="p-4 mt-10">
          {/* Componente de formulario de contacto */}
          <ContactForm />
        </div>
      </div>

      <Clientes />
      <Productos />
      <Footer/>
    </div>
  );
};

export default Contactame;
