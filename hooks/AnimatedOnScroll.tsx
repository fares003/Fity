// components/AnimatedOnScroll.tsx
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import type { MotionProps,Variants } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedOnScrollProps {
  children: ReactNode;
  initial?: MotionProps["initial"];
  whileInView?: MotionProps["animate"];
  transition?: MotionProps["transition"];
  triggerOnce?: boolean;
  className?: string;
  animationType?: "fadeIn" | "slideUp" | "zoomIn" | "flipX" | "flipY" | "rotate" | "custom";
  delay?: number;
  viewportMargin?: string;
  staggerChildren?: boolean;
}

const animationVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  flipX: {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0 }
  },
  flipY: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0 }
  },
  rotate: {
    hidden: { opacity: 0, rotate: -45 },
    visible: { opacity: 1, rotate: 0 }
  }
};

const AnimatedOnScroll: React.FC<AnimatedOnScrollProps> = ({
  children,
  initial,
  whileInView,
  transition = { 
    duration: 0.8, 
    ease: [0.16, 0.77, 0.47, 0.97], // Custom bezier curve
    delay: 0.1
  },
  triggerOnce = true,
  className = "",
  animationType = "slideUp",
  delay = 0,
  viewportMargin = "0px 0px -100px 0px",
  staggerChildren = false
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: 0.2 // Trigger when 20% of element is visible
  });

  // Use predefined variants or custom props
  const variants = animationType !== "custom" 
    ? animationVariants[animationType] 
    : undefined;

  return (
    <motion.div
      ref={ref}
      initial={initial || (variants ? "hidden" : { opacity: 0, y: 50 })}
      animate={isInView ? 
        (variants ? "visible" : whileInView || { opacity: 1, y: 0 }) : 
        (variants ? "hidden" : initial || { opacity: 0, y: 50 })
      }
      transition={{
        ...transition,
        delay: delay || transition.delay
      }}
      variants={variants}
      whileHover={staggerChildren ? undefined : { scale: 1.02 }}
      whileTap={staggerChildren ? undefined : { scale: 0.98 }}
    >
      {staggerChildren ? (
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
      className={className}

        >
          {React.Children.map(children, (child, i) => (
            <motion.div variants={variants || {
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}>
              {child}
            </motion.div>
          ))}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
};

export default AnimatedOnScroll;