import { FC,useEffect } from "react";
import { cn } from "../../../utils/cn";
import { motion,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TechCardProps {
  title: string;
  classaName: string;
  tech: string[];
}

const TechCard: FC<TechCardProps> = ({ title, classaName, tech }) => {

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
    ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full md:ml-[25vh] md:scale-100">
      <div className="flex-1 w-full flex flex-col gap-4 p-3 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transform transition-all  border border-neutral-400 md:mb-16  justify-center">
        <div className="text-white font-semibold text-2xl tracking-wider">
          {title}
        </div>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, i) => (
            <div
              key={i}
              className={cn(
                "rounded-md bg-body px-2 text-xs text-primary p-2",
                item === "HTML" && "border-2 border-red-500/60",
                item === "CSS" && "border-2 border-blue-500/60",
                item === "Tailwind" && "border-2 border-blue-500/60",
                item === "Javascript" && "border-2 border-yellow-400/60",
                item === "ReactJs" && "border-2 border-blue-500/60",
                item === "NextJs" && "border-2 border-black/60",
                item === "NodeJs" && "border-2 border-green-500/60",
                item === "ExpressJs" && "border-2 border-gray-500/60",
                item === "Firebase" && "border-2 border-orange-500/60",
                item === "MySql" && "border-2 border-blue-500/60",
                item === "MongoDB" && "border-2 border-emerald-500/60",
                item === "SQL" && "border-2 border-blue-500/60"
              )}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechCard;
