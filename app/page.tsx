// pages/index.tsx
import React from "react";
import Particles from "./components/particles";
import HeroSection from "./components/HeroSections";
import AboutSection from "./components/AboutSection";
import Layout from "./components/layout";
import ContactSales from "./components/ContactSales";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full p-full overflow-x-hidden">
        <HeroSection />

        <AboutSection />
        {/* Aquí podrías añadir más secciones si las tienes */}
        <Pricing />
      </div>
    </Layout>
  );
}
