import React, { createContext, useRef, useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export const LocomotiveScrollContext = createContext();

export const LocomotiveScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const [locoScroll, setLocoScroll] = useState(null);

  useEffect(() => {
    if (scrollRef.current) {
      const instance = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08, // optional, tweak for feel
        // ...other LocomotiveScroll options...
      });
      setLocoScroll(instance);

      return () => {
        if (instance) instance.destroy();
      };
    }
  }, []);

  return (
    <LocomotiveScrollContext.Provider value={{ locoScroll, scrollRef }}>
      <div data-scroll-container ref={scrollRef}>
        {children}
      </div>
    </LocomotiveScrollContext.Provider>
  );
};