import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedText from "@/Utils/AnimatedText";

export default function Marquee({ sentence,className }: { sentence?: string, className?: string }) {
  const { ref, controls } = useScrollAnimation({
    animation: {
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
    once: true,
  });

  return (
    <div className={`overflow-hidden whitespace-nowrap w-full bg-gray-900 text-white py-4 ${className}`}>
      <motion.div ref={ref} className="inline-block" animate={controls}>
              <AnimatedText
        text={`${sentence} - ${sentence}`}
        className="bg-transparent font-bold capitalize text-9xl bebas-neue z-10"
      />
      </motion.div>
    </div>
  );
}
