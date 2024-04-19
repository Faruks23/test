'use client'


// ExampleComponent.js
import { useEffect } from 'react';
import { gsap } from 'gsap';

const ExampleComponent = () => {
  useEffect(() => {
    // GSAP animations
    gsap.from('.example-element', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <div className="example-element h-[200px] w-[300px] bg-blue-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint fuga, eligendi repudiandae hic quisquam commodi odio excepturi possimus dolore nobis laudantium eum necessitatibus vitae? Enim placeat unde sunt eaque?
    </div>
  );
};

export default ExampleComponent;
