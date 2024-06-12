// components/PricingCarousel.tsx

"use client";
import React, { useState } from "react";
import Particles from "./particles";
import Link from "next/link";

const plans = [
  // {
  //   title: "Suscripción Mensual",
  //   description:
  //     "Acceso ilimitado a mentoría, cursos y proyectos colaborativos.",
  //   price: "49",
  //   includes: [
  //     "Mentoría ilimitada",
  //     "Acceso a todos los cursos y talleres",
  //     "Proyectos colaborativos",
  //   ],
  // },
  {
    title: "Pago por Sesión / Mentoría",
    description: "Paga solo por lo que necesitas, sin compromisos.",
    price: "Varía por sesión",
    includes: [
      "Evaluación actual de tu carrera",
      "Acceso a sesiones individuales",
      "Acceso a sesiones grupales",
    ],
  },
  {
    title: "Comisión por Colaboración en Proyectos",
    description:
      "Colabora en proyectos y recibe una comisión por tus contribuciones.",
    price: "Basado en comisión",
    includes: [
      "Proyectos reales",
      "Ingresos compartidos",
      "Motivación adicional",
    ],
  },
];

const PricingCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? plans.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === plans.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='relative min-h-screen flex flex-col items-center w-full justify-center overflow-hiddenbg-white py-24 sm:py-32'>
      <Particles
        className='absolute inset-0 z-[-1] bg-gradient-to-tl bg-gray-900'
        quantity={200}
        rgba='rgba(255, 76, 76'
      />
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-medium-pink sm:text-4xl'>
            Elige tu forma de crecer
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            Empieza con el plan que mejor se adapte a tus necesidades y
            evoluciona tu carrera en tecnología.
          </p>
        </div>
        <div className='relative mt-16 max-w-2xl mx-auto'>
          <div className='overflow-hidden rounded-3xl ring-1 ring-gray-200 bg-gray-800 p-8 sm:p-10'>
            <h3 className='text-2xl font-bold tracking-tight text-medium-pink '>
              {plans[currentIndex].title}
            </h3>
            <p className='mt-6 text-base leading-7 text-gray-300'>
              {plans[currentIndex].description}
            </p>
            <div className='mt-10 flex items-center gap-x-4'>
              <h4 className='flex-none text-sm font-semibold leading-6 text-medium-pink'>
                Incluye
              </h4>
              <div className='h-px flex-auto bg-gray-100'></div>
            </div>
            <ul className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6'>
              {plans[currentIndex].includes.map((item, index) => (
                <li key={index} className='flex gap-x-3'>
                  <svg
                    className='h-6 w-5 flex-none text-medium-pink'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className='mt-10'>
              <p className='text-base font-semibold text-medium-pink '>
                {plans[currentIndex].price}
              </p>
            </div>
            <Link
              href='contact'
              className='mt-10 block w-full rounded-md bg-medium-red px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-medium-pink  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Suscríbete
            </Link>
          </div>
          <div className='flex justify-between mt-8'>
            <button
              className='text-gray-300 hover:text-white'
              onClick={handlePrev}
            >
              &larr; Anterior
            </button>
            <button
              className='text-gray-300 hover:text-white'
              onClick={handleNext}
            >
              Siguiente &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCarousel;
