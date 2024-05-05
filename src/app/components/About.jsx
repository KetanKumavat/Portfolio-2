"use client";
import React, { useRef, useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect.tsx";
import { motion, useAnimation } from "framer-motion";
import TechStack from "./TechStack.tsx";
import Image from "next/image";

const words = `I am a passionate full-stack developer based in India, currently in my 2nd year of engineering. I've crafted several projects and am deeply engrossed in learning data structures and algorithms. Currently seeking enriching internship opportunities to further enhance my skills and contribute to meaningful projects.`;

const images = [
  "/ketan1.jpg",
  "/ketan2.JPG",
  "/ketan4.jpeg",
  "/ketan5.jpeg",
  "/ketan3.JPG",
];

export default function AboutMe() {
  const controls = useAnimation();
  const textRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const time = Math.random() * 2000 + 2000;
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, time);

    return () => clearInterval(interval);
  }, []);

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
    <motion.div className="w-full flex mt-[20em] h-fit flex-col items-center justify-center">
      <motion.div className="w-full flex font-bold">
        <h1 className="text-white text-5xl flex justify-center w-full items-center z-50">
          <motion.span
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.2, delay: 0 }}
            className="inline-block">
            About Me
          </motion.span>
        </h1>
      </motion.div>
      <div className="md:flex-col gap-0 md:items-center w-full p-0 m-auto mt-24">
        <div className=" hidden md:flex w-full">
          <div className="flex">
            <TextGenerateEffect
              words={words}
              className="text-white/35 px-16 w-full md:w-1/2 flex justify-center items-center text-center md:text-left"
            />
            <div className="flex ml-[25vh] w-[55vh] aspect-square justify-center">
              <img
                src={images[imageIndex]}
                alt="Ketan"
                className="object-cover rounded-[25px] flex md:scale-95"
              />
            </div>
          </div>
        </div>
        <h1 className="text-2xl hidden md:text-left md:block md:text-2xl ml-16 text-white/80 font-normal">
          <span className="font-bold px-2 ">Currently Learning: </span> DSA,
          Typescript
        </h1>
      </div>

      {/* mobile view */}
      <div className="md:hidden flex-col justify-center items-center">
        <div className="flex scale-90 mx-auto w-[50vh] aspect-square justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              src={images[imageIndex]}
              alt="Ketan"
              className="object-cover aspect-square w-full rounded-[80px] p-10"
            />
          </div>
        </div>
        <TextGenerateEffect
          words={words}
          className="text-white/35 w-full px-7 mt-14 flex justify-center items-center text-center md:text-right"
        />
        <h1 className="text-xl md:text-2xl text-center mt-12 md:mt-0 text-white/80 font-normal">
          <span className="font-bold px-2 py-8 text-center">
            Currently Learning:{" "}
          </span>{" "}
          DSA, Typescript
        </h1>
      </div>
      {/* skills */}
      <TechStack />
    </motion.div>
  );
}
