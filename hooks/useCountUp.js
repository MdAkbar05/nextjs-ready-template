// /hooks/useCountUp.js
import { useEffect, useState } from "react";

export default function useCountUp(target, startWhenVisible) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startWhenVisible) return;

    let start = 0;
    const duration = 1500; // 1.2 sec
    const stepTime = 16; // ~60fps
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, startWhenVisible]);

  return count;
}
