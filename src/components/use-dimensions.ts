import { useEffect, useRef, useState } from "react";

export const useDimensions = (ref: React.RefObject<HTMLElement>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const getDimensions = () => {
      if (ref.current) {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
      }
    };

    getDimensions();
    window.addEventListener("resize", getDimensions);

    return () => window.removeEventListener("resize", getDimensions);
  }, [ref]);

  return dimensions.current;
};
