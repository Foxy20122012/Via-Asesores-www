import React from "react";
import { SiWebmoney } from "react-icons/si";
import { BsFillCursorFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { BiAlignMiddle } from "react-icons/bi";

function ContactForm() {
  return (
    <section className="m-10 bg-white">
      <div className="text-center py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contactame
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-sky-700 sm:text-xl">
          ¿Tienes un problema técnico o necesitas ayuda con algún proyecto en
          particular? ¡Hazlo saber! Estoy aquí para ayudarte.
        </p>
        <form
          action="https://formsubmit.co/umbrellamaximus43@gmail.com"
          method="POST"
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nombre
              <BsFillFileEarmarkPersonFill className="flex mx-auto text-sky-700" />
            </label>
            <input
              type="text"
              name="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Tu correo
              <SiWebmoney className="flex mx-auto text-sky-700" />
            </label>
            <input
              type="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Usuario@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="asunto"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Asunto
              <BiAlignMiddle className="flex mx-auto text-sky-700" />
            </label>
            <input
              type="text"
              name="text"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Permítenos saber en qué te podemos ayudar"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="mensaje"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Tu mensaje
              <BsFillEnvelopeFill className="flex mx-auto text-sky-700" />
            </label>
            <textarea
              name="mensaje"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Deja un comentario..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            value="Enviar"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-sky-700 hover:bg-sky-600"
          >
            Enviar
            <BsFillCursorFill className="flex mx-auto text-[#fffffffa]" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
