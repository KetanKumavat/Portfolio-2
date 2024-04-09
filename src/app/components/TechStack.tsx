import { FC,useEffect,useState,useRef } from "react";
import TechCard from "./Card/TechCard";
import { motion, useAnimation } from "framer-motion";
interface TechStackProps {}

const TechStack: FC<TechStackProps> = ({}) => {
    const controls = useAnimation();
    const textRef = useRef(null);

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
    <div className="col-span-2 md:col-span-2 mt-96 h-auto lg:col-span-3 w-full">
      <div className="w-full h-fit flex font-bold">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-white text-2xl scale-90 md:scale-110">
        <TechCard
          title="Frontend"
          classaName="bg-neutral-700 text-white "
          tech={["HTML", "CSS", "Tailwind", "Javascript", "ReactJs", "NextJs"]}
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
      </div>
    </div>
  );
};

export default TechStack;
