import { useLayoutEffect, useState } from 'react';

const getWindowWidth = () => {
  if (typeof window === 'undefined') {
    return 0;
  }

  return window.innerWidth;
};

export const useWindowWidthChange = (callBack: (changed: number) => any) => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  useLayoutEffect(() => {
    const update = () => {
      const changed = windowWidth - window.innerWidth;
      setWindowWidth(window.innerWidth);
      callBack(changed);
    };
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return;
};
