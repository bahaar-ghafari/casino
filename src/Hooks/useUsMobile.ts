import { useState, useEffect } from 'react';

const MOBILE_WIDTH = 600; // You can adjust this threshold based on your design needs

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= MOBILE_WIDTH);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
