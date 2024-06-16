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
      title: "Full Stack Developer at MentorMenti",
      img: "/mentor.png",
      description:
        "At MentorMenti, I had an opportunity to work for the development of an event registration platform. Using the MERN stack, I built RESTful APIs to power everything from event sign-ups to admin management. My work involved setting up secure login systems with JWT, designing dynamic forms for a smooth user experience, and ensuring the backend could handle it all with Node.js, Express.js, and MongoDB. I also worked on the frontend, using React.js and TailwindCSS to create a responsive and intuitive UI for BadBusiness Events website.",
    },
    {
      title: "Winner of DevQuest Hackathon By IIT Jodhpur",
      img: "/hackathon.webp",
      description:
        "I participated in a 24-hour hackathon organized by IIT Jodhpur and my team won the first prize. My team and I built a web application Insightify, a platform that provides links to products with varying prices on different platforms through web scraping, offering users real-time price comparison and insightful price trend analysis.",
    },
    {
      title: "Technical Member at GFG Students' Chapter TCET",
      img: "/image.png",
      description:
        "As a technical member, I was responsible for making the committee's website. Used technologies like ReactJS, TailwindCSS to create a responsive and dynamic website. I also created DSA questions for college coding contests organized by the GeeksforGeeks Students' Chapter TCET.",
    },
  ];

  return (
    <motion.div className="px-4 md:p-8 lg:px-16">
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
      <div className="mt-8 md:mt-36">
        {exp.map((e, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-6 md:gap-10 mt-12 md:mt-16">
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img
                src={e.img}
                alt="experience"
                className="mx-auto max-w-md text-white object-cover rounded-lg scale-75 md:scale-95 flex"
              />
            </div>
            <div className="w-full md:w-2/4 ">
              <h1 className="text-white md:text-left text-center text-2xl md:text-4xl font-bold">
                {e.title}
              </h1>
              <br />
              <p className="text-white/90 md:text-left text-center mt-4 text-base md:text-2xl">
                {e.description}
              </p>
            </div>
            {/* <hr /> */}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
