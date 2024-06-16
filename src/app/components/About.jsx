"use client";
import React, { useRef, useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect.tsx";
import { motion, useAnimation } from "framer-motion";
import TechStack from "./TechStack.tsx";
import Experience from "./Experience";

const words = `I am a passionate full-stack developer based in India, currently in my 2nd year of engineering. I've crafted several projects and am deeply engrossed in learning data structures and algorithms. I'm always on the lookout for internship opportunities where I can learn more, contribute, and grow. Let's build something amazing together.`;

const images = [
  "/ketan1.webp",
  "/ketan2.webp",
  "/ketan4.webp",
  "/ketan5.webp",
  "/ketan3.webp",
];

export default function AboutMe() {
  const controls = useAnimation();
  const textRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

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
    <motion.div className="w-full flex mt-[20em] h-fit flex-col items-center justify-center overflow-x-hidden">
      <motion.div className="w-fit flex font-bold">
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
      <div className="md:flex-col gap-0 md:items-center w-full mt-24">
        <div className=" hidden md:flex justify-center px-12 w-full">
          <div className="flex flex-col gap-10">
            <TextGenerateEffect
              words={words}
              className="text-white/35 px-16 w-full md:w-1/2 flex justify-center items-center text-justify md:text-left"
            />
            <div>
              <h1 className="text-2xl hidden md:text-left md:block md:text-2xl ml-16 text-white/80 font-normal">
                <span className="font-bold px-2 ">Currently Learning: </span>{" "}
                DSA, Typescript
              </h1>
            </div>
          </div>
          <div className="flex w-full aspect-square justify-center">
            <div className="image-container">
              <img
                src={images[imageIndex]}
                alt="Ketan"
                className="aspect-square w-fit object-cover rounded-[25px] shadow-xl shadow-neutral-800 flex"
              />
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="md:hidden flex-col justify-center items-center">
        <div className="flex aspect-square justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="image-container">
              <img
                src={images[imageIndex]}
                alt="Ketan"
                className="object-cover scale-75 flex justify-center shadow-xl overflow-hidden shadow-neutral-700 items-center aspect-square w-full rounded-[25px] scale-75"
              />
            </div>
          </div>
        </div>
        <TextGenerateEffect
          words={words}
          className="text-white/65 w-full px-5 mt-14 flex justify-center items-center text-center md:text-right"
        />
        <h1 className="text-xl md:text-2xl text-center mt-12 md:mt-5 text-white/80 font-normal">
          <span className="font-bold py-8 text-center">
            Currently Learning:{" "}
          </span>{" "}
          DSA, Typescript
        </h1>
      </div>
      <Experience />
      {/* skills */}
      <TechStack />
    </motion.div>
  );
}
