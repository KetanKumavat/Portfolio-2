import React from "react";
import Ellipse from "../../../public/Ellipse 9.svg";
import Image from "next/image";

function Home() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center z-0">
      <div className="flex flex-col justify-center items-center -mt-[25vh] relative">
        <Image
          src={Ellipse}
          alt="ellipse"
          className="absolute -mt-44 pointer-events-none "
        />
        <h1 className="text-8xl bg-gradient-to-b from-white via-zinc-500 to-white/15 text-transparent bg-clip-text font-bold">
          Ketan Kumavat
        </h1>
        <div className="h-2"></div>
        <h2 className="text-3xl text-white opacity-50">Full Stack Developer</h2>
      </div>
    </div>
  );
}

export default Home;
