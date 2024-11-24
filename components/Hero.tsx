"use client";

"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Vortex } from './ui/vortex';
const Hero = () => {
    return (
        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            
                <br/>
                <br/>
                <br/>
                <br/>
                <TextGenerateEffect words="Hello! My name is Vincent" className="text-center text-[520px] md:text-5xl lg:text-8xl" />
                <TextGenerateEffect words="Full Stack Developer in New York City." className="text-center text-[520px] md:text-5xl lg:text-8xl" />
                    <br/>
                <p className="text-blue-100 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                    Beautiful Structured Portfolio Website <p className="text-teal-400 inline-block">User Experiences</p>
                </p>
                <br/>
                <br/>
                
                <a href="#about">
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-teal-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-50" >
                        About Me
                    </button>
                </a>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    )
}

export default Hero





