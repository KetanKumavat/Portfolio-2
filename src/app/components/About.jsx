"use client";

import React,{useRef,useEffect, useState,} from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect.tsx";
import Image from 'next/image';
import Ketan from "../../../public/ketan1.jpg";
import { motion, useAnimation } from "framer-motion";
import TechStack from "./TechStack.tsx"
const words = `I am a passionate full-stack developer based in India, currently in my 2nd year of engineering. I've crafted several projects and am deeply engrossed in learning data structures and algorithms, dedicating myself to regular practice on LeetCode. Currently seeking enriching internship opportunities to further enhance my skills and contribute to meaningful projects.`;



export default function AboutMe() {

  const controls = useAnimation();
  const textRef = useRef(null);

 useEffect(() => {
   const handleScroll = () => {
     if (window.scrollY > 200) {
       controls.start({ opacity: 1 });
     } else {
       controls.start({ opacity: 0 });
     }
   };

   window.addEventListener("scroll", handleScroll);
   return () => window.removeEventListener("scroll", handleScroll);
 }, [controls]);

return (
  <motion.div className="w-full mt-[28vh] md:mt-[20vh] flex h-screen flex-col items-center justify-center">
    <motion.div className="w-full flex font-bold">
      <h1 className="text-white text-5xl flex justify-center w-full items-center mb-8 -mt-24 z-50">
        <motion.span
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.2, delay: 0 }}
          className="inline-block">
          About Me
        </motion.span>
      </h1>
    </motion.div>
    <div className="md:flex-col gap-0 md:ml-[1vh] md:items-center w-full p-0 m-auto ">
      <div className="md:ml-24 hidden md:flex md:-mt-24 w-full">
        <TextGenerateEffect
          words={words}
          className="text-white/35 w-full md:w-1/2 flex justify-center items-center text-center md:text-left"
        />
        <Image src={Ketan} alt="Ketan" className="scale-50 flex md:scale-50" />
      </div>
    <div className="hidden md:flex md:ml-20 -mt-60">
        <h1 className="text-2xl md:text-2xl text-left text-white/80 font-normal">
          <span className="font-bold px-2">Currently Learning: </span> DSA,
          Typescript
        </h1>
      </div>
    </div>
    {/* mobile view */}
    <div className="md:hidden flex-col w-full -mt-16">
      <Image src={Ketan} alt="Ketan" className="scale-50 flex md:scale-50" />
      <TextGenerateEffect
        words={words}
        className="text-white/35 w-full flex justify-center items-center text-center md:text-right"
      />
      <h1 className="flex text-2xl md:text-3xl text-left ml-2 text-white/80 font-normal mt-16">
        <span className="font-bold px-2">Currently Learning: </span> DSA,
        Typescript
      </h1>
    </div>

    {/* skills */}

    <TechStack/>
  </motion.div>
);
}