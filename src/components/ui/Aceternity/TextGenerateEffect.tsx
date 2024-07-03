"use client";
import { useEffect, useMemo } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  // Memoize the split words array
  const wordsArray = useMemo(() => words.split(" "), [words]);

  // Memoize animation settings
  const animationSettings = useMemo(
    () => ({
      opacity: 1,
    }),
    [],
  );

  const animationOptions = useMemo(
    () => ({
      duration: 2,
      delay: stagger(0.2),
    }),
    [],
  );

  useEffect(() => {
    if (scope.current) {
      animate("span", animationSettings, animationOptions);
    }
  }, [scope.current, wordsArray]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={` ${
                idx > 3 ? "text-purple" : "dark:text-white text-black"
              } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
