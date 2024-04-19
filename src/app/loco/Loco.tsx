// LocomotiveScroll.
"use client"
import { ReactNode, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const LocomotiveScrollContainer = ({ children}:any) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const el = document.querySelector('#scroll-container');

      if (el !== null) {
        // Import LocomotiveScroll dynamically to avoid server-side execution
        import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
          const scroll = new LocomotiveScroll({
            el: el as HTMLElement,
            smooth: true,
            // Add other Locomotive Scroll options as needed
          });

          return () => {
            scroll.destroy();
          };
        });
      }
    }
  }, []);
  return <div id="scroll-container">{children}</div>;
};

export default LocomotiveScrollContainer;
