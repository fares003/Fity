import { useEffect, useState, type RefObject } from "react";

export default function useOnScreenOnce<T extends Element>(
  ref: RefObject<T | null>,
  threshold: number = 0.1
): boolean {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
      observer.disconnect();
    };
  }, [ref, threshold, hasAnimated]);

  return isVisible;
}
