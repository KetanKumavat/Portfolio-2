import { cn } from "../../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


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
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  py-10",
        className
      )}>
      {items.map((item, idx) => (
        <div
          key={item.link}
          className="relative group -p-16"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute h-full w-full p-0 bg-neutral-600 block rounded-3xl"
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
        "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-0 scale-75",
        className
      )}>
      <div className="relative z-0">
        <div className="p-4">
          <img
            src={imageUrl}
            alt="Project Screenshot"
            layout="responsive"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg"
          />
          <div className="flex justify-center gap-4 mt-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-700 text-center text-white font-semibold w-1/2 flex justify-center py-3 rounded-full hover:bg-zinc-800">
              View Github Repo
            </a>
            <a
              href={deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-700 text-center text-white font-semibold w-1/2 flex justify-center py-3 rounded-full hover:bg-zinc-800">
              View Deployed Link
            </a>
          </div>
          {children}
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
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
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
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}>
      {children}
    </p>
  );
};
