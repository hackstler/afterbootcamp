import React from "react";
import Particles from "../components/particles";
import Layout from "../components/layout";
import AboutSection from "../components/AboutSection";

export default function About() {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center w-full p-full overflow-x-hidden'>
        <div className=' w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
        {/* Aquí podrías añadir más secciones si las tienes */}
        <AboutSection />
      </div>
    </Layout>
  );
}