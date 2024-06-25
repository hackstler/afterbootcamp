import Particles from "./particles";
import Link from "next/link";
import ContactSales from "./ContactSales";

const plans = [
  {
    title: "Mentorías personalizadas",
    description: "Primera sesión gratuita para evaluar tus necesidades.",
    price: "Varía por sesión",
    includes: [
      "Evaluación actual de tu carrera",
      "Acceso a sesiones individuales",
      "Acceso a sesiones grupales",
    ],
  },
  {
    title: "Colaboración en tus proyectos",
    description: "Definimos tus objetivos y te ayudamos a alcanzarlos.",
    price: "En función de tus necesidades",
    includes: [
      "Evaluación de tus proyectos",
      "Acceso a recursos exclusivos",
      "Plan de acción personalizado",
    ],
  },

  {
    title: "Obtener experiencia laboral",
    disabled: true,
    description: "PROXIMAMENTE: Colabora con profesionales de la industria.",
    price: "En función de tus necesidades",
    includes: [
      "Obten la experiencia necesaria para triunfar en la industria",
      "Colabora con profesionales",
      "Carta de recomendacion al finalizar tu colaboración",
    ],
  },
];

const ServicesCarousel: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <div
      id={id}
      className='relative min-h-screen flex flex-col items-center w-full justify-center overflow-hidden  py-24 sm:py-32'
    >
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
        <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {plans.map((plan, index) => (
            <div
              key={index}
              aria-disabled={plan.disabled}
              className='flex flex-col justify-between overflow-hidden rounded-3xl ring-1 ring-gray-200 bg-gray-800 p-8 sm:p-10'
            >
              <div>
                <h3 className='text-2xl font-bold tracking-tight text-medium-pink'>
                  {plan.title}
                </h3>
                <p className='mt-6 text-base leading-7 text-gray-300'>
                  {plan.description}
                </p>
                <div className='mt-10 flex items-center gap-x-4'>
                  <h4 className='flex-none text-sm font-semibold leading-6 text-medium-pink'>
                    Incluye
                  </h4>
                  <div className='h-px flex-auto bg-gray-100'></div>
                </div>
                <ul className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300'>
                  {plan.includes.map((item, index) => (
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
              </div>
              <ContactSales classNameButton='mt-10 block w-full rounded-md bg-medium-red px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-medium-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
