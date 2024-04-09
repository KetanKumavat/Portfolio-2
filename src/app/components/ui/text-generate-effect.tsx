import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "../../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  let wordsArray = words.split(" ");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Adjust staggerChildren value for desired delay between words
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={cn("font-normal", className)}>
      <div className="mt-4">
        <div
          className="dark:text-white text-[20px] -mt-16 md:mt-0 md:text-3xl leading-snug"
          ref={ref}
          style={{ display: "flex", flexDirection: "column" }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                variants={wordVariants}
                className="text-white/70 opacity-1">
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
