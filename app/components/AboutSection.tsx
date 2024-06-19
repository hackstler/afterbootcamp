import Particles from "./particles";
import Link from "next/link";

const AboutSection: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <div
      id={id}
      className='relative min-h-screen flex flex-col items-center w-full justify-center overflow-hidden py-24 sm:py-32'
    >
      <Particles
        className='absolute inset-0 z-[-1] bg-gradient-to-tl bg-white'
        quantity={400}
        rgba='rgba(0, 0, 0'
      />
      <div
        className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
        aria-hidden='true'
      >
        <div
          className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
        aria-hidden='true'
      >
        <div
          className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-4xl font-bold tracking-tight text-medium-red sm:text-6xl'>
            Transforma Tu Carrera: De Bootcamp a Líder Tecnológico
          </h2>
          <p className='mt-6 text-lg leading-8 text-medium-pink'>
            Descubre el secreto del éxito con un mentor que ha recorrido tu
            mismo camino y ha triunfado en la industria tecnológica en tiempo
            récord.
          </p>
        </div>
        <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-medium-red sm:grid-cols-2 md:flex lg:gap-x-10'>
            <Link href='history' className='hover:text-gray-300'>
              Conoce Mi Viaje:{" "}
              <span aria-hidden='true'>
                {" "}
                Descubre cómo logré superar los desafíos del mundo tech para
                construir una carrera exitosa. ¡Tú también puedes! →
              </span>
            </Link>
            <Link href='contact' className='hover:text-gray-300'>
              Mentoría Personalizada:{" "}
              <span aria-hidden='true'>
                Obtén la guía precisa y el apoyo necesario para transformar tus
                habilidades en éxito profesional. ¡Empieza hoy! →
              </span>
            </Link>
            <Link href='pricing' className='hover:text-gray-300'>
              Unirse al Programa:{" "}
              <span aria-hidden='true'>
                Únete hoy y comienza a construir tu futuro con nuestra guía
                experta. →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
