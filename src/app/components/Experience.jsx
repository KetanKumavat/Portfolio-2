import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Experience = () => {
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        controls.start({ opacity: 1 });
      } else {
        controls.start({ opacity: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const exp = [
    {
      title: "Software Developer Intern at Kifayti Health",
      img: "/kifayti_logo.webp",
      duration: "August 2024 - Present",
      tech: "ReactJs, TailwindCSS, NodeJs, ExpressJs, MariaDB,",
    },
    {
      title: "Frontend Developer at go4explore",
      img: "/go4explore.webp",
      duration: "August 2024 - September 2024",
      tech: "NextJs, TailwindCSS",
    },
    {
      title: "Full Stack Developer at MentorMenti",
      img: "/mentor.png",
      duration: "April 2024 - June 2024",
      tech: "ReactJs, TailwindCSS, NodeJs, ExpressJs, MongoDB",
    },
    {
      title: "Technical Member at GFG Students' Chapter TCET",
      img: "/image.png",
      duration: "September 2023 - Present",
      tech: "ReactJs, TailwindCSS",
    },
    {
      title: "Won DevQuest Hackathon By IIT Jodhpur",
      img: "/hackathon.webp",
      duration: "January 2024",
      tech: "NextJs, TailwindCSS, NodeJs, ExpressJs, MongoDB, Flask",
    },
  ];

  return (
    <motion.div className="px-2 mt-12 w-full md:p-8 lg:px-16">
      <motion.div className="w-full flex justify-center font-bold mt-12 md:mt-24">
        <h1 className="text-white text-5xl md:text-5xl flex justify-center w-full items-center z-50">
          <motion.span
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.2, delay: 0 }}
            className="inline-block">
            Experience
          </motion.span>
        </h1>
      </motion.div>
      <div className="mt-24 md:mt-36">
        {exp.map((e, i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-12 lg:mt-16">
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <img
                src={e.img}
                alt="experience"
                className="mx-auto max-w-md text-white object-cover rounded-lg scale-75 lg:scale-95 flex"
              />
            </div>
            <div className="w-full lg:w-2/4 text-center lg:text-left">
              <h1 className="text-white text-2xl lg:text-4xl font-bold">
                {e.title}
              </h1>
              <p className="text-white/90 mt-4 text-xl lg:text-2xl flex justify-center lg:justify-start px-2">
                {e.duration}
              </p>
              <p className="text-white/80 mt-4 text-lg lg:text-2xl flex justify-center lg:justify-start px-2">
                {e.tech}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
