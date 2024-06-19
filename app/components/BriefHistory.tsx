"use client";

import { useRouter } from "next/navigation";

const BriefHistory: React.FC<{ id?: string }> = ({ id }) => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push("/history");
  };

  return (
    <div
      id={id}
      className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'
    >
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <svg
          className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='e813992c-7d03-4cc4-a2bd-151760b470a0'
              width={200}
              height={200}
              x='50%'
              y={-1}
              patternUnits='userSpaceOnUse'
            >
              <path d='M100 200V.5M.5 .5H200' fill='none' />
            </pattern>
          </defs>
          <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
            <path
              d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            width='100%'
            height='100%'
            strokeWidth={0}
            fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
          />
        </svg>
      </div>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='lg:max-w-lg'>
              <p className='text-base font-semibold leading-7 text-indigo-600'>
                Afterbootcamp
              </p>
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                De Trabajar en un Cine a Fundar una Consultoría de Éxito
              </h1>
            </div>
          </div>
        </div>
        <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <img
            className='w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
            src='https://storage.googleapis.com/afterbootcamp/IMG_4229.JPG'
            alt='Sergio en Afterbootcamp'
          />
        </div>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
              <section className='mb-8'>
                <h2 className='text-2xl font-bold mb-4'>El Comienzo</h2>
                <p>
                  <span className='font-bold'>Soy Sergio, tengo 28 años</span> y
                  aunque no cuento con formación reglada, soy un desarrollador
                  de software y DevOps apasionado. Hace unos años, me encontraba
                  trabajando en un cine. Llevaba dos años en ese empleo, pero{" "}
                  <span className='font-bold'>
                    sentía que no era mi destino
                  </span>
                  . Además, tenía varios préstamos que sumaban varios miles de
                  euros, lo que añadía una gran presión a mi vida.
                </p>
                <p>
                  Fue entonces cuando, navegando en InfoJobs, encontré una
                  oportunidad que cambiaría mi vida: un bootcamp de
                  programación...
                </p>
                <button
                  onClick={handleReadMore}
                  className='mt-4 inline-flex items-center rounded-md border border-transparent bg-medium-red px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Leer más
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefHistory;
