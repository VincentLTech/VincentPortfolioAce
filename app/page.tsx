"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


import { Vortex } from "@/components/ui/vortex";

import Hero from "@/components/Hero";
// import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

import { motion } from "framer-motion";
import { main } from "framer-motion/client";

// import Grid from "@/components/Grid";
// import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";

// import RecentProjects from "@/components/RecentProjects";

const Home = () => {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={1250}
      baseHue={120}
      className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      // flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full
      // flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full
      // flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full
      //relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5
      //flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full
    > 
    <br/>

    {/* <FloatingNav navItems={navItems} /> */}
      <Hero/>
      <TextGenerateEffect words="A small selection of my skills" className="text-center text-[320px] md:text-5xl lg:text-8xl"/>
      {/* <Tools/> */}
      <TextGenerateEffect words="A small selection of recent projects" className="text-center text-[320px] md:text-5xl lg:text-8xl"/>
      
      <Projects/>
      <TextGenerateEffect words="All of my Work Experience" className="text-center text-[320px] md:text-5xl lg:text-8xl" />
      <Experience/>
      </Vortex>
    </div>
  )
};

export default Home;
{/* <div className="max-w-7xl"> 
            <Projects/>
  
          </div> */}
        
{/* <Vortex
              backgroundColor="black"
              rangeY={800}
              particleCount={150}
              baseHue={120}
              className=" relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
              //relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5
              //flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full
            > */}