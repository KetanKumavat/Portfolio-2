"use client";
import { FC, useEffect } from "react";
import TechCard from "./Card/TechCard";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TechStackProps {}

const TechStack: FC<TechStackProps> = ({}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const techIcons = [
    { id: "html", url: "https://skillicons.dev/icons?i=html" },
    { id: "css", url: "https://skillicons.dev/icons?i=css" },
    { id: "tailwind", url: "https://skillicons.dev/icons?i=tailwind" },
    { id: "react", url: "https://skillicons.dev/icons?i=react" },
    { id: "vite", url: "https://skillicons.dev/icons?i=vite" },
    { id: "nextjs", url: "https://skillicons.dev/icons?i=nextjs" },
    { id: "nodejs", url: "https://skillicons.dev/icons?i=nodejs" },
    { id: "express", url: "https://skillicons.dev/icons?i=express" },
    { id: "mongodb", url: "https://skillicons.dev/icons?i=mongodb" },
    { id: "firebase", url: "https://skillicons.dev/icons?i=firebase" },
    { id: "postgresql", url: "https://skillicons.dev/icons?i=postgresql" },
    { id: "prisma", url: "https://skillicons.dev/icons?i=prisma" },
    { id: "git", url: "https://skillicons.dev/icons?i=git" },
    { id: "github", url: "https://skillicons.dev/icons?i=github" },
    { id: "vercel", url: "https://skillicons.dev/icons?i=vercel" },
    { id: "vscode", url: "https://skillicons.dev/icons?i=vscode" },
    { id: "postman", url: "https://skillicons.dev/icons?i=postman" },
    { id: "md", url: "https://skillicons.dev/icons?i=markdown" },
    { id: "markdown", url: "https://skillicons.dev/icons?i=markdown" },
    { id: "c", url: "https://skillicons.dev/icons?i=c" },
    { id: "cpp", url: "https://skillicons.dev/icons?i=cpp" },
    { id: "py", url: "https://skillicons.dev/icons?i=python" },
  ];

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="col-span-1 md:col-span-2 mt-40 md:mt-80 md:px-4 mb-8 h-auto lg:col-span-2 w-full">
      <div className="w-full h-fit flex font-bold justify-center items-center">
        <h1 className="text-white text-5xl flex justify-center w-full items-center mb-8 -mt-24 z-50">
          <motion.span
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.2, delay: 0 }}
            className="inline-block text-4xl">
            What I Know?
          </motion.span>
        </h1>
      </div>
      <div className="flex justify-center items-center col-span-1 mt-10 md:col-span-2 md:px-4 mb-8 h-auto lg:col-span-2 w-full flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:w-3/4 w-full lg:grid-cols-2 gap-12 text-white text-2xl scale-95 md:scale-100">
          <TechCard
            title="Frontend"
            classaName="bg-neutral-700 text-white"
            tech={[
              "HTML",
              "CSS",
              "Tailwind",
              "Javascript",
              "ReactJs",
              "NextJs",
            ]}
          />
          <TechCard
            title="Backend"
            classaName="bg-[#f37c36]"
            tech={["NodeJs", "ExpressJs", "Firebase"]}
          />
          <TechCard
            title="Database"
            classaName="bg-[#e0558a]"
            tech={["MongoDB", "SQL"]}
          />
          <TechCard
            title="Programming Languages"
            classaName="bg-[#e0558a]"
            tech={["C/C++", "Javascript", "Python"]}
          />
        </motion.div>

        <div className="scroller-container mt-24">
          <motion.div
            className="scroller"
            initial={{ x: "0%" }}
            animate={{
              x: "-50%",
              transition: {
                duration: techIcons.length * 3,
                repeat: Infinity,
                ease: "linear",
              },
            }}>
            {techIcons.concat(techIcons).map((icon, index) => (
              <img
                key={index}
                src={icon.url}
                alt={icon.id}
                className="tech-icon"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
