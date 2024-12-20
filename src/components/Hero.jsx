import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import smt from '../assets/smt.png';
import ttc from '../assets/ttc.png';
import backg from '../assets/backg.png';
import logo from '../assets/logo.png';

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
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-4 bg-black/50">
        <img src={logo} alt="Logo" className="w-20 h-auto" />
        <button className="text-2xl text-white lg:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <ul className={`flex flex-col lg:flex-row items-center gap-4 transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <li><a href="#about" className="hover:text-[#EB48D5]">About</a></li>
          <li><a href="#services" className="hover:text-[#D2AE2F]">Services</a></li>
          <li><a href="#contact" className="hover:text-[#EB48D5]">Contact</a></li>
        </ul>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-16 pb-12 md:pb-20">
          <h1 className="font-bold tracking-tight text-xl md:text-4xl lg:text-5xl xl:text-6xl">
            Advancing Education Through {' '} <br />
            <span className="text-[#EB48D5]">Innovative Solutions</span> and{' '}
            <span className="text-[#D2AE2F]">Technologies</span>
          </h1>
          <p className="mt-6 text-sm md:text-xl">
            Leading the Future of Tech through Education
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center md:mt-8 pb-8 md:pb-16 2xl:pb-24 px-12 xl:px-20">
        <div className="relative w-[350px] md:w-[600px] lg:w-[890px] h-[280px] md:h-[350px] xl:h-[500px]">
          <img
            src={ttc}
            alt="Tech Talent City"
            className="absolute w-full h-full object-cover z-0 rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center p-8 z-10 bg-gradient-to-t from-black/70 to-transparent rounded-lg">
            <button className="text-sm bg-[#EB48D5] p-3 hover:bg-[#d835b0] transition-all rounded-full">
              <a href="https://www.shemodeltech.com" target="_blank" rel="noopener noreferrer">SHE MODEL TECH</a>
            </button>
            <p className="max-w-xs mt-3 text-center">
              Inspiring and Equipping the Next Generation of Female Tech Leaders
            </p>
          </div>
        </div>

        <div className="relative w-[350px] md:w-[600px] lg:w-[890px] h-[280px] md:h-[350px] xl:h-[500px] mt-8 lg:mt-0 lg:ml-8">
          <img
            src={smt}
            alt="She Model Tech"
            className="absolute inset-0 w-full h-full object-cover z-0 rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center p-8 z-10 bg-gradient-to-t from-black/70 to-transparent rounded-lg">
            <button className="text-sm bg-[#D2AE2F] p-3 hover:bg-[#b38e1f] transition-all rounded-full">
              <a href="https://www.techtalentscity.com" target="_blank" rel="noopener noreferrer">TECHTALENTS CITY</a>
            </button>
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
