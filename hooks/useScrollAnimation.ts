'use client';
import { useRef, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

type UseScrollAnimationOptions = {
  animation: Parameters<ReturnType<typeof useAnimation>["start"]>[0];
  stopWhenOut?: boolean;
  once?: boolean;
};

export function useScrollAnimation({
  animation,
  stopWhenOut = false,
  once = false,
}: UseScrollAnimationOptions) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once });

  useEffect(() => {
    if (isInView) {
      controls.start(animation);
    } else if (stopWhenOut) {
      controls.stop();
    }
  }, [isInView, controls, animation, stopWhenOut]);

  return { ref, controls, isInView };
}
