import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import smt from '../assets/smt.png';
import ttc from '../assets/ttc.png';
import backg from '../assets/backg.png';
import logo from '../assets/logo.png'; // Add your logo image import here

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      className="relative bg-black/20 text-white h-full bg-center bg-cover"
      style={{ backgroundImage: `url(${backg})` }}
    >
      {/* Navigation Bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-16 pb-12 md:pb-20">
          <h1 className="font-bold tracking-tight text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
            Leading the Future of {' '} <br />
            <span className="text-[#EB48D5]">Tech</span> through{' '}
            <span className="text-[#D2AE2F]">Education</span>
          </h1>
        </div>
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center md:mt-8 pb-8 md:pb-16 2xl:pb-24 px-12 xl:px-20">
        <div className="relative w-[350px] md:w-[600px] lg:w-[890px] h-[280px] md:h-[350px] xl:h-[500px]">
          <img
            src={ttc}
            alt="Tech Talent City"
            className="absolute w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center p-8 z-10 bg-black/30">
            <p className="max-w-xs mt-3 text-center">
              Inspiring and Equipping the Next Generation of Female Tech Leaders
            </p>
          </div>
        </div>
        <div className="relative w-[350px] md:w-[600px] lg:w-[890px] h-[280px] md:h-[350px] xl:h-[500px]">
          <img
            src={smt}
            alt="She Model Tech"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center p-8 z-10 bg-black/30">
            <p className="max-w-xs mt-3 text-center">
              Cultivating a Thriving Ecosystem for Emerging Tech Professionals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
