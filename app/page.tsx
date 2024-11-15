"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { navItems } from "@/data/navItems";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

import { Vortex } from "@/components/ui/vortex";
import { AuroraBackground } from "../components/ui/aurora-background"
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/floating-navbar";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

import { motion } from "framer-motion";

// import Grid from "@/components/Grid";
// import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";

// import RecentProjects from "@/components/RecentProjects";

const Home = () => {
  return (
        <div>
          <FloatingNav navItems={navItems} />
            
            
            <Hero/>

            <Vortex
              backgroundColor="black"
              rangeY={800}
              particleCount={500}
              baseHue={120}
              className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            >
              <TextGenerateEffect words="A small selection of recent projects" className="text-center text-[320px] md:text-5xl lg:text-8xl" />
            </Vortex>
            <Vortex
              backgroundColor="black"
              rangeY={800}
              particleCount={500}
              baseHue={120}
              className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            >
              <Projects/>
            </Vortex>
            
            <Vortex
              backgroundColor="black"
              rangeY={800}
              particleCount={500}
              baseHue={120}
              className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            >
              <TextGenerateEffect words="All of my Work Experience" className="text-center text-[320px] md:text-5xl lg:text-8xl" />
            </Vortex>

            <Vortex
              backgroundColor="black"
              rangeY={800}
              particleCount={500}
              baseHue={120}
              className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            >
              <Experience/>
            </Vortex>

          {/* <div className="max-w-7xl"> 
            <Projects/>
  
          </div> */}
      </div>
  )
};

export default Home;

        