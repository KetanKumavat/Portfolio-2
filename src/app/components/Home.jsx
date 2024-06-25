"use client";
import React, { useRef } from "react";
import Ellipse from "../../../public/Ellipse 9.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

function Home() {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      className="flex mt-[18vh] flex-col w-full h-fit justify-center items-center z-0 bg-transparent"
      ref={constraintsRef}>
      <div className="flex flex-col justify-center items-center overflow-x-hidden">
        <Image
          src={Ellipse}
          alt="ellipse"
          className="absolute scale-y-150 md:scale-105 pointer-events-none "
        />
      </div>
      <div className="h-fit w-full flex flex-col items-center justify-center overflow-hidden rounded-md overflow-x-hidden">
        <h1 className="md:text-8xl text-7xl  text-white/80 text-center bg-clip-text font-bold cursor-default">
          Ketan Kumavat
        </h1>
        <h2 className="text-2xl md:text-4xl text-center text-white/70 md:leading-7 leading-9 cursor-default">
          Full Stack Developer
        </h2>
        <div className="h-4"></div>
        <div className="py-8 mt-24" id="downloadResume">
          <motion.div
            drag
            dragConstraints={constraintsRef}
            animate={{
              scale: [1, 1.3, 1, 1.3, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bggrad1"></motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="focus:outline-none md:hidden">
            <a href="/Resume_of_KetanKumavat(v2).pdf" download="Ketan's Resume">
              <div className="flex justify-center items-center gap-2 bg-neutral-500 font-semibold text-neutral-100 px-3 py-2 rounded-md cursor-pointer ">
                <FiDownload size={20} />
                <span>Download Resume</span>
              </div>
            </a>
          </motion.button>
        </div>
      </div>

      <div className="flex md:mt-[20vh] mt-8 flex-row gap-5 md:mr-0 mr-0 justify-center items-center">
        <div>
          <a href="https://github.com/KetanKumavat" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0,0,256,256"
              style={{ fill: "white" }}>
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}>
                <g transform="scale(10.66667,10.66667)">
                  <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-0.9 0.2,-1.3c0,-0.2 0.2,-0.3 0.3,-0.3h0.1c0.5,0.1 1.5,0.4 2.4,1.3c0.6,-0.2 1.3,-0.3 2,-0.3c0.7,0 1.4,0.1 2,0.3c0.9,-0.9 2,-1.2 2.5,-1.3h0.1c0.2,0 0.3,0.1 0.4,0.3c0,0.4 0,0.9 0,1.3c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ketankumavat" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0,0,256,256"
              style={{ fill: "white" }}>
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}>
                <g transform="scale(5.12,5.12)">
                  <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <div>
          <a href="https://leetcode.com/KetanKumavat" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0,0,256,256"
              style={{ fill: "white" }}>
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}>
                <g transform="scale(16,16)">
                  <path d="M10.44727,0.26563c-0.13004,0.00413 -0.25335,0.05878 -0.34375,0.15234l-4.44727,4.44922l-2.56055,2.55859c-0.05137,0.05015 -0.09134,0.11076 -0.11719,0.17773c-1.20865,1.37039 -1.19195,3.4604 0.11719,4.76953l2.56055,2.56055c1.36138,1.36138 3.58588,1.36138 4.94727,0l2.25,-2.25c0.12632,-0.12664 0.17547,-0.31106 0.12895,-0.48378c-0.04653,-0.17271 -0.18167,-0.30748 -0.35451,-0.35354c-0.17284,-0.04605 -0.35712,0.00361 -0.48342,0.13028l-2.25,2.25c-0.97862,0.97862 -2.55263,0.97862 -3.53125,0l-2.56055,-2.56055c-0.97862,-0.97862 -0.97862,-2.55459 0,-3.5332l2.56055,-2.55859c0.97862,-0.97862 2.55263,-0.97862 3.53125,0l2.25,2.25c0.19524,0.19578 0.51223,0.19622 0.70801,0.00098c0.19578,-0.19524 0.19622,-0.51223 0.00098,-0.70801l-2.25,-2.25c-0.69283,-0.69282 -1.60914,-1.02407 -2.52148,-1.01172l2.73047,-2.73047c0.14893,-0.14387 0.19378,-0.36466 0.11278,-0.55523c-0.08099,-0.19058 -0.27107,-0.31152 -0.47802,-0.30414zM7.32813,9.40039c-0.18031,-0.00254 -0.34803,0.09219 -0.43893,0.24794c-0.0909,0.15575 -0.0909,0.34837 0,0.50412c0.0909,0.15575 0.25862,0.25049 0.43893,0.24794h6.90039c0.18031,0.00254 0.34803,-0.09219 0.43893,-0.24794c0.0909,-0.15575 0.0909,-0.34837 0,-0.50412c-0.0909,-0.15575 -0.25862,-0.25049 -0.43893,-0.24794z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
