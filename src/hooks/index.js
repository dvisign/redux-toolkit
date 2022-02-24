import { useState, useCallback, useEffect, useRef } from 'react';

const useInput = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
}

const useFadeIn = (duration = 0, start = false, cb = null) => {
  const element = useRef();
  useEffect(() => {
    if (element.current && start) {
      const { current } = element;
      let last = +new Date();
      const tick = () => {
        const targetValue = +current.style.opacity + (new Date() - last) / duration;
        last = +new Date();
        current.style.opacity = targetValue;
        if (Math.floor(targetValue) >= 1) {
          clearInterval(interval);
          if (cb) {
            cb();
          }
        }
      };
      const interval = setInterval(() => {
        tick();
      }, 16);
      
    }
  }, [start]);
  return { ref: element, style: { opacity: 0 } };
};

export { useInput, useFadeIn };