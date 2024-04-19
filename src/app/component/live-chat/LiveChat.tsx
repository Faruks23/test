"use client"

import React, { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/64e4418fcc26a871b0309be5/1h8dq06q0';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      
    </>
  );
};

export default LiveChat;