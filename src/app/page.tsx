"use client";
// importing header
import Header from "./components/layout/Header";
// importing useEffect, useRef, useState
import { useEffect, useState } from "react";
//importing AnimatedSlider
import AnimatedSlider from "./components/ui/AnimatedSlider";
// importing LandingSection
import LandingSection from "./components/sections/LandingSection";
// importing ProjectsSection
import ProjectsSection from "./components/sections/ProjectsSection";

export default function Home() {


  return (
    <div className="w-screen min-h-screen flex flex-col gap-8 lg:gap-16">
      <Header />
      <LandingSection />
      <ProjectsSection />
    </div>
  );
}
