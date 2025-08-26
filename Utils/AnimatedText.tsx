// components/AnimatedText.tsx
'use client';
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { FC } from "react";
import { useRef } from "react";
import useOnScreenOnce from "@/hooks/useOScreenOnce";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delayPerChar?: number;
}

const AnimatedText: FC<AnimatedTextProps> = ({
  text,
  className = "",
  delayPerChar = 0.05,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useOnScreenOnce(ref, 0.1);



  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: delayPerChar,
        delayChildren: 0.2 * i,
      },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
