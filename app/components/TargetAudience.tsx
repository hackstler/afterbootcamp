import React from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Particles from "./particles";
import ContactSales from "./ContactSales";
const TargetAudience: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <div
      id={id}
      className='relative min-h-screen flex flex-col items-center w-full justify-center px-6 pt-14 lg:px-8'
    >
      <Particles
        className='absolute inset-0 z-[-1] bg-gradient-to-tl bg-white'
        quantity={400}
        rgba='rgba(255, 76, 76'
      />
      <div className='mx-auto max-w-7xl text-center'>
        <h2 className='text-base font-semibold leading-7 text-gray-900'>
          ¿Hacia quién va dirigido?
        </h2>
        <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Nuestro programa es para ti si...
        </h1>
        <div className='mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className='bg-medium-pink shadow-lg rounded-lg p-8 hover:bg-pink-500 transition-colors duration-300'>
            <AcademicCapIcon className='mx-auto h-12 w-12 text-gray-900' />
            <h3 className='mt-4 text-2xl font-bold text-gray-900'>
              Recientes Graduados de Bootcamp
            </h3>
            <p className='mt-4 text-gray-700'>
              Si has finalizado un bootcamp recientemente y estás trabajando o
              en la búsqueda de empleo, nuestro programa puede ayudarte a
              fortalecer tus habilidades y avanzar en tu carrera.
            </p>
          </div>
          <div className='bg-medium-pink shadow-lg rounded-lg p-8 hover:bg-pink-500 transition-colors duration-300'>
            <BriefcaseIcon className='mx-auto h-12 w-12 text-gray-900' />
            <h3 className='mt-4 text-2xl font-bold text-gray-900'>
              Graduados de Grado Superior
            </h3>
            <p className='mt-4 text-gray-700'>
              Si has terminado un Grado Superior y estás trabajando o buscando
              empleo, este programa te ayudará a consolidar tus conocimientos y
              mejorar tu perfil profesional.
            </p>
          </div>
          <div className='bg-medium-pink shadow-lg rounded-lg p-8 hover:bg-pink-500 transition-colors duration-300'>
            <UserGroupIcon className='mx-auto h-12 w-12 text-gray-900' />
            <h3 className='mt-4 text-2xl font-bold text-gray-900'>
              Graduados Universitarios
            </h3>
            <p className='mt-4 text-gray-700'>
              Si has completado un grado universitario y estás trabajando o en
              busca de trabajo, nuestro programa está diseñado para darte las
              herramientas necesarias para destacar en el mercado laboral.
            </p>
          </div>
        </div>
        {/* <div className='mt-12'>
          <h2 className='text-2xl font-bold text-gray-900'>Testimonios</h2>
          <p className='mt-4 text-gray-700'>
            "El programa me ayudó a conseguir mi primer trabajo en tecnología.
            Las mentorías personalizadas son increíbles."
          </p>
          <p className='mt-2 text-gray-900 font-semibold'>- María López</p>
        </div> */}
        <div className='mt-12'>
          <ContactSales classNameButton='bg-medium-pink text-gray-900 px-3.5 py-2.5 text-sm font-semibold shadow-lg rounded-lg p-8 hover:bg-pink-500 transition-colors duration-300' />
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
