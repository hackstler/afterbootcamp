"use client";
import React, { useState } from "react";
import Particles from "./particles";
import { useRouter } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/20/solid"; // Importar el ícono correcto de Heroicons v2
import ContactSales from "./ContactSales";
import Image from "next/image";

const steps = [
  {
    title: "Punto de partida",
    description: [
      "Establecer los objetivos a alcanzar",
      "Identificar tus fortalezas y debilidades",
      "De dónde vienes y hacia dónde vas",
    ],
    image:
      "https://storage.googleapis.com/afterbootcamp/DALL%C2%B7E%202024-06-19%2021.15.42%20-%20A%20person%20standing%20at%20a%20starting%20line%20on%20a%20running%20track%2C%20ready%20to%20begin%20a%20race.%20The%20starting%20line%20is%20clearly%20marked%2C%20with%20the%20person%20in%20a%20focused%2C%20det.webp",
  },
  {
    title: "The Program",
    description: [
      "Planificación y estrategia",
      "Checkpoints y milestones",
      "Acompañamiento y soporte",
    ],
    image:
      "https://storage.googleapis.com/afterbootcamp/DALL%C2%B7E%202024-06-19%2021.15.43%20-%20A%20detailed%20map%20showing%20a%20hiking%20trail%20with%20clearly%20marked%20milestones%20and%20checkpoints.%20The%20path%20is%20winding%20through%20a%20scenic%20landscape%2C%20with%20markers%20ind.webp",
  },
  {
    title: "Llegada a la meta",
    description: [
      "Objetivos conquistados",
      "Habilidades obtenidas",
      "Feedback y next steps",
    ],
    image:
      "https://storage.googleapis.com/afterbootcamp/DALL%C2%B7E%202024-06-19%2021.15.45%20-%20A%20person%20standing%20triumphantly%20at%20the%20summit%20of%20a%20mountain%2C%20arms%20raised%20in%20victory.%20The%20background%20shows%20a%20breathtaking%20view%20from%20the%20mountain%20peak%2C%20s.webp",
  },
];
// TODO: Abstraer el componente StepComponent
const StepComponent: React.FC<{ setOpenModal?: (open: boolean) => void }> = ({
  setOpenModal,
}) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  return (
    <div className='mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-3'>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`relative group bg-white text-gray-900 shadow-xl rounded-lg p-8 cursor-pointer transition-transform transform hover:scale-105 ${
            activeStep === index ? "bg-opacity-90" : "bg-opacity-75"
          }`}
          onClick={() => setOpenModal && setOpenModal(true)}
        >
          <Image
            src={step.image}
            alt={step.title}
            className='w-full h-32 object-cover rounded-lg mb-4'
            width={400}
            height={200}
          />
          <h3 className='text-2xl font-bold'>{step.title}</h3>
          <div className='absolute inset-0 opacity-0 group-hover:opacity-75 transition-opacity rounded-lg'></div>
          <ul className='mt-4 text-start list-disc list-inside space-y-2'>
            {step.description.map((desc, i) => (
              <div key={i}>
                <CheckCircleIcon className='inline w-5 h-5 text-green-500 mr-2' />
                {desc}
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const TheProgram: React.FC<{ id?: string }> = ({ id }) => {
  const router = useRouter();

  return (
    <div
      id={id}
      className='relative min-h-screen flex flex-col items-center w-full justify-center overflow-hidden py-24 sm:py-32 text-gray-900  '
    >
      <Particles
        className='absolute inset-0 z-[-1] bg-gradient-to-tl from-pink-200 via-red-200 to-pink-200'
        quantity={200}
        rgba='rgba(255, 76, 76'
      />
      <div className='mx-auto max-w-7xl text-center'>
        <h2 className='text-base font-semibold leading-7'>El Programa</h2>
        <h1 className='mt-2 text-4xl font-bold tracking-tight sm:text-5xl'>
          Los 3 Pasos
        </h1>
        <p className='mt-4 max-w-2xl text-lg leading-7 text-gray-700 lg:mx-auto'>
          Descubre cómo nuestro programa te guiará desde el punto de partida
          hasta conseguir tus objetivos.
        </p>

        <ContactSales>
          <StepComponent />
        </ContactSales>
      </div>
    </div>
  );
};

export default TheProgram;
