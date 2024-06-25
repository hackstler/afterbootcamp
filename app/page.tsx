import React from "react";
import Particles from "./components/particles";
import HeroSection from "./components/HeroSections";
import AboutSection from "./components/AboutSection";
import Layout from "./components/layout";
import BriefHistory from "./components/BriefHistory";
import Services from "./components/Services";
import ContactSales from "./components/ContactSales";
import TheProgram from "./components/TheProgram";
import TargetAudience from "./components/TargetAudience";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full p-full overflow-x-hidden'>
      <HeroSection id='hero-section' />
      <BriefHistory id='history-section' />
      <TheProgram id='program-section' />
      <TargetAudience id='audience-section' />
      <Services id='services-section' />
    </div>
  );
}
