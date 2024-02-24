"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect.tsx";

const words = `Hi, I'm Ketan Kumavat, a 2nd-year engineering student passionate about Full Stack MERN Development. I excel in frontend technologies like React, Next.js, and Tailwind CSS. My team and I clinched 1st prize in the DevQuest Hackathon by IIT Jodhpur, fueling my ambition to become a pro in full stack development.`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}