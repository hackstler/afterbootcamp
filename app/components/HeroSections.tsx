import Particles from "./particles";
import Link from "next/link";
import ContactSales from "./ContactSales";

// components/HeroSection.tsx
const HeroSection: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <div
      id={id}
      className='relative min-h-screen flex flex-col items-center w-full justify-center px-6 pt-14 lg:px-8'
    >
      <Particles
        className='absolute inset-0 z-[-1] bg-gradient-to-tl from-medium-red to-medium-pink'
        quantity={400}
        rgba='rgba(255, 255, 255'
      />

      <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
        Impulsa tu Carrera con Afterbootcamp
      </h1>

      <p className=' flex items-center justify-center mt-6 text-xl leading-8 text-gray-200 text-center'>
        Transforma tu experiencia post-formación en éxito profesional con
        mentoría personalizada de expertos Full Stack. Accede a recursos
        exclusivos diseñados para tu crecimiento, fortalece las habilidades más
        demandadas para avanzar en tu carrera o lanza tus proyectos con nuestra
        ayuda.
      </p>

      <div className='mt-10 mb-14 flex flex-col items-center justify-center gap-y-4'>
        <ContactSales classNameButton='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-medium-red shadow-sm hover:bg-gray-900' />
      </div>
    </div>
  );
};

export default HeroSection;
