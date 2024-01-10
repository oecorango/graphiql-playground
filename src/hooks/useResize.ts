import { useEffect, useState } from 'react';

export const useWidthResize = () => {
  const initSize = window.innerWidth;
  const [widthSize, setWidthSize] = useState(initSize);

  useEffect(() => {
    const handleResize = () => {
      setWidthSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return widthSize;
};
