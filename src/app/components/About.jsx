"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect.tsx";
import Image from 'next/image';
import Ketan from "../../../public/ketan1.jpg";

const words = `turning ideas into real life products is my calling`;

export default function TextGenerateEffectDemo() {
  return (
    <div className="w-full mt-[25vh] flex h-screen">
      <div className="w-full mt-16 ml-24 text-sm flex">
        <TextGenerateEffect words={words} className="w-1/2 text-left"/>
        <div className="flex justify-center items-center">
         {/* <Image src={Ketan} alt="Ketan" className="scale-50 md:scale-75 flex mb-96 mr-20" /> */}
      </div>
      </div>
      
    </div>
  );
}
