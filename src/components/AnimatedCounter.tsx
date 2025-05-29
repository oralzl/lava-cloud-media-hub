
import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 800 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

export default AnimatedCounter;
