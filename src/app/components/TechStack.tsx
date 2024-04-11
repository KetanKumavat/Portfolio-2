import { FC,useEffect } from "react";
import TechCard from "./Card/TechCard";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TechStackProps {}

const TechStack: FC<TechStackProps> = ({}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="col-span-2 md:col-span-2 mt-96 h-auto lg:col-span-3 w-full">
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-white text-2xl scale-90 md:scale-110">
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
        <TechCard
          title="Programming Languages"
          classaName="bg-[#e0558a]"
          tech={["C/C++", "Javascript", "Python"]}
        />
      </motion.div>
    </div>
  );
};

export default TechStack;
