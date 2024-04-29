// useScrollReveal.js
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (selector) => {
  useEffect(() => {
    ScrollReveal().reveal(selector, { 
      delay: 100, 
      reset: true,
      distance: '20px',
      origin: 'bottom',
      duration: 1000
    });
  }, []);
};

export default useScrollReveal;