import { cn } from "../../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
    homepageUrl?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  py-10 z-z-1 overflow-x-hidden",
        className
      )}>
      {items.map((item, idx) => (
        <div
          key={item.link}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute h-full w-full bg-neutral-800 p-2 rounded-3xl -p-"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            imageUrl={item.image}
            githubUrl={item.link}
            deployedUrl={item.homepageUrl}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  imageUrl,
  githubUrl,
  deployedUrl,
}: {
  className?: string;
  children: React.ReactNode;
  imageUrl: string;
  githubUrl: string;
  deployedUrl: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-black border-2 border-white/80 group-hover:border-neutral-900 relative z-0 scale-75",
        className
      )}>
      <div className="relative z-0">
        <div className="p-4">
          <img
            src={imageUrl}
            alt="Project"
            // width={400}
            // height={300}
            className="w-full h-auto rounded-lg"
          />
          {children}
          <div className="flex justify-center gap-4 mt-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800 text-center text-white text-xl md:text-2xl font-semibold w-1/2 flex justify-center py-3 rounded-full hover:bg-zinc-800">
              View Repo
            </a>
            <a
              href={deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800 text-center text-white text-xl md:text-2xl font-semibold w-1/2 flex justify-center py-3 rounded-full hover:bg-zinc-800">
              View Project
            </a>
          </div>
          {/* {children} */}
        </div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        " text-4xl text-center text-zinc-100 font-bold tracking-wide mt-4",
        className
      )}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-200 tracking-wide leading-relaxed text-xl text-center",
        className
      )}>
      {children}
    </p>
  );
};
