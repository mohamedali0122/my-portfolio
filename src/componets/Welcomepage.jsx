import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import welcomanme from "../animaition/welcomepage.json"
const WelcomePage = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const defaultwelcom = {
    loop: true,
    autoplay: true,
    animationData: welcomanme, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' 
    }
  };
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showWelcome && (
        <div className="bg-secondblue fixed inset-0 flex flex-col justify-center items-center text-center z-50">
         <center> <Lottie
             options={defaultwelcom}
             height={550} width={550} /> </center> 

          <h1 className="text-ligtyalow text-2xl font-bold pb-3"><sub className='text-white text-2xl font-bold '>Hello,</sub> I am Muhammad Ali</h1>
          <h1 className="text-ligtyalow text-2xl font-bold">Welcome to my personal website</h1>
        </div>
      )}
    </>
  );
};

export default WelcomePage;