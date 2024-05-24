import Particles from "./particles";
import Link from "next/link";

// components/HeroSection.tsx
const HeroSection: React.FC = () => {
  return (
    <div className='relative min-h-screen flex flex-col items-center w-full justify-center px-6 pt-14 lg:px-8'>
      <Particles
        className='absolute inset-0 z-[-1] bg-gradient-to-tl from-medium-red to-medium-pink'
        quantity={400}
        rgba='rgba(255, 255, 255'
      />

      <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
        <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
          Announcing our next round of funding.{" "}
          <Link href='contact' className='font-semibold text-white'>
            <span className='absolute inset-0' aria-hidden='true'></span>Read
            more <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </div>
      <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
        Impulsa tu Carrera con Afterbootcamp
      </h1>

      <p className='mt-6 text-lg leading-8 text-gray-200'>
        Transforma tu experiencia post-bootcamp en éxito profesional con
        mentoría personalizada de expertos en DevOps y Full Stack.
      </p>
      <div className='mt-10 mb-14 flex items-center justify-center gap-x-6'>
        <Link
          href='contact'
          className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-medium-red shadow-sm hover:bg-gray-900'
        >
          Comienza ahora
        </Link>
        <Link
          href='history'
          className='text-sm font-semibold leading-6 text-gray-900'
        >
          Descubre más →
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
