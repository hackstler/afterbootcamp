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
        rgba='rgba(255, 76, 76, 0.5)'
      />
      <div className='mx-auto max-w-7xl text-center'>
        <h2 className='text-lg font-semibold leading-7 text-gray-900 uppercase tracking-wider'>
          ¿Hacia quién va dirigido?
        </h2>
        <h1 className='mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>
          Nuestro programa es para ti si...
        </h1>
        <div className='mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className='bg-medium-pink shadow-lg rounded-lg p-8 hover:bg-pink-500 transition-colors duration-300'>
            <AcademicCapIcon className='mx-auto h-12 w-12 text-gray-900' />
            <h3 className='mt-4 text-2xl font-bold text-gray-900'>
              Recientes Graduados de Bootcamp
            </h3>
            <ul className='mt-4 text-left text-gray-700 list-disc list-inside'>
              <li>
                Has completado un bootcamp recientemente y estás en búsqueda de
                tu primer empleo o avanzando en tu carrera.
              </li>
              <li>
                Deseas fortalecer tus habilidades técnicas con un enfoque
                práctico y actualizado.
              </li>
              <li>Quieres destacar en el competitivo mercado laboral tech.</li>
            </ul>
          </div>
          <div className='bg-medium-pink shadow-lg rounded-lg p-8 hover:bg-pink-500 transition-colors duration-300'>
            <BriefcaseIcon className='mx-auto h-12 w-12 text-gray-900' />
            <h3 className='mt-4 text-2xl font-bold text-gray-900'>
              Graduados de Grado Superior
            </h3>
            <ul className='mt-4 text-left text-gray-700 list-disc list-inside'>
              <li>
                Necesitas ayuda con tu Trabajo de Fin de Grado (TFG) y deseas
                orientación especializada.
              </li>
              <li>
                Estás trabajando o en busca de empleo y quieres consolidar tus
                conocimientos.
              </li>
              <li>
                Aspiras a mejorar tu perfil profesional y abrir nuevas
                oportunidades laborales.
              </li>
            </ul>
          </div>
          <div className='bg-medium-pink shadow-lg rounded-lg p-8 hover:bg-pink-500 transition-colors duration-300'>
            <UserGroupIcon className='mx-auto h-12 w-12 text-gray-900' />
            <h3 className='mt-4 text-2xl font-bold text-gray-900'>
              Graduados Universitarios
            </h3>
            <ul className='mt-4 text-left text-gray-700 list-disc list-inside'>
              <li>
                Requieres apoyo con tu Trabajo de Fin de Máster (TFM) y buscas
                mentoría personalizada.
              </li>
              <li>
                Estás iniciando tu carrera profesional o buscando nuevas
                oportunidades laborales.
              </li>
              <li>
                Quieres adquirir herramientas prácticas para sobresalir en el
                mercado laboral.
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-12'>
          <ContactSales classNameButton='bg-medium-pink text-gray-900 px-3.5 py-2.5 text-sm font-semibold shadow-lg rounded-lg p-8 hover:bg-pink-500 transition-colors duration-300' />
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
