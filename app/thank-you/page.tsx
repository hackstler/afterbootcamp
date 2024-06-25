"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ThankYou: React.FC = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md'>
        <h2 className='text-center text-3xl font-extrabold text-gray-900'>
          Formulario enviado correctamente
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          ¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.
        </p>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Revisa tu bandeja de entrada/spam para más información.
        </p>
        <div className='mt-6'>
          <button
            onClick={handleBackToHome}
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-medium-red hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
