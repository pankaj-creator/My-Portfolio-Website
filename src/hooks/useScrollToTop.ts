import { useEffect } from 'react';

const useScrollToTop = (callback: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // You can adjust the threshold as needed
      if (scrollPosition === 0) {
        callback();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
};

export default useScrollToTop;
