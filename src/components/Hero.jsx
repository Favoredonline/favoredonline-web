import { FiMenu, FiX } from 'react-icons/fi';
import smt from '../assets/smt.png';
import ttc from '../assets/ttc.png';
import backg from '../assets/backg.png';

const Hero = () => {
  return (
    <div
      className="relative bg-black/50 text-white min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${backg})` }}
    >
      {/* Navigation Menu */}
      <nav className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <button className="md:hidden text-2xl text-white">
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto text-center pt-32 pb-20">
        <h1 className="font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl">
          Advancing Education Through <br />
          <span className="text-[#EB48D5]">Innovative Solutions</span> and{' '}
          <span className="text-[#D2AE2F]">Technologies</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl">
          Leading the Future of Tech through Education
        </p>
      </div>

      {/* Service Cards */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center mt-12 pb-16 px-12 xl:px-20 space-y-12 lg:space-y-0 lg:space-x-10">
        
        {/* Tech Talent City Card */}
        <div className="relative w-full md:w-[600px] lg:w-[440px] h-[320px] group">
          <img 
            src={ttc} 
            alt="Tech Talent City" 
            className="absolute w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center p-8 bg-gradient-to-t from-black/60 to-transparent rounded-xl">
            <button className="text-sm bg-[#EB48D5] py-3 px-6 rounded-md hover:bg-[#C33BAC] transition-colors">
              <a href="https://www.techtalentscity.com" target="_blank" rel="noopener noreferrer">TECH TALENTS CITY</a>
            </button>
            <p className="max-w-xs mt-3 text-center text-white">
              Cultivating a Thriving Ecosystem for Emerging Tech Professionals
            </p>
          </div>
        </div>

        {/* She Model Tech Card */}
        <div className="relative w-full md:w-[600px] lg:w-[440px] h-[320px] group">
          <img 
            src={smt} 
            alt="She Model Tech" 
            className="absolute w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center p-8 bg-gradient-to-t from-black/60 to-transparent rounded-xl">
            <button className="text-sm bg-[#D2AE2F] py-3 px-6 rounded-md hover:bg-[#B29125] transition-colors">
              <a href="https://www.shemodeltech.com" target="_blank" rel="noopener noreferrer">SHE MODEL TECH</a>
            </button>
            <p className="max-w-xs mt-3 text-center text-white">
              Inspiring and Equipping the Next Generation of Female Tech Leaders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
