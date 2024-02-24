"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect.tsx";
import Image from 'next/image';
import Ketan from "../../../public/ketan1.jpg";

const words = `Hi, I'm Ketan Kumavat, a 2nd-year engineering student passionate about Full Stack MERN Development. My team and I clinched 1st prize in the DevQuest Hackathon by IIT Jodhpur, fueling my ambition to become a pro in full stack development.`;

export default function TextGenerateEffectDemo() {
  return (
    <div className="w-full mt-[25vh] flex h-screen">
      <div className="w-full mt-16 ml-24 text-sm flex">
        <TextGenerateEffect words={words} className="w-1/2 text-left"/>
        <div className="flex justify-center items-center">
         <Image src={Ketan} alt="Ketan" className="scale-50 flex mb-96 mr-20" />
      </div>
      </div>
      
    </div>
  );
}
