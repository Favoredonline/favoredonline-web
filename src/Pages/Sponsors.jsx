import IMAGE from '../assets/smt.png';
import LOGO from '../assets/logo.png';

const Sponsors = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      
      {/* Event Hero Section */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          <div className="text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Be the Catalyst for Innovation</h1>
            <p className="text-xl md:text-2xl leading-relaxed max-w-xl mx-auto md:mx-0">
              Join us in driving change, empowering excellence, and shaping the future of technology. 
              Support the <strong className="text-[#D2AE2F]">She Model Tech Summit</strong> and the <strong className="text-[#EB48D5]">TechTalents City Conference</strong> where visionaries, innovators, and changemakers come together to create lasting impact.
            </p>
            <div className="mt-6">
              <a 
                href="#sponsorship" 
                className="inline-block bg-gradient-to-r from-[#D2AE2F] to-[#A18634] text-black text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Sponsor Us
              </a>
            </div>
          </div>
          <div>
            <img src={IMAGE} alt="Event Illustration" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Sponsorship Package Section */}
      <section className="bg-gradient-to-r from-[#F9F9F9] to-[#ECECEC] py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Fuel Innovation, Amplify Your Brand</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fuel innovation, empower women, and support emerging tech talent by sponsoring the She Model Tech Summit and TechTalents City Conference, 
            positioning your brand as a force for excellence with exclusive access to industry experts, changemakers, and unparalleled brand influence, 
            thought leadership, and recruitment opportunities.
          </p> 
        </div>
        <div className="flex justify-center mt-8">
          <a 
            href="#sponsorship" 
            className="inline-block bg-gradient-to-r from-[#D2AE2F] to-[#A18634] text-black text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Explore Sponsorship Packages
          </a>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-white py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6">Our Esteemed Sponsors</h2>
          <p className="text-lg text-gray-600">We are proud to be supported by organizations committed to advancing innovation and excellence.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {[...Array(8)].map((_, index) => (
            <img 
              key={index} 
              src={LOGO} 
              alt={`Sponsor Logo ${index + 1}`} 
              className="w-full h-20 object-contain rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>

      {/* Call to Action at the Bottom */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Join Our Mission</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Empower dreams, open doors, and shape the future of technology by providing women in tech, emerging talents, and future leaders with transformative opportunities to lead, create, and thrive.
          </p>
          <a 
            href="#sponsorship" 
            className="inline-block bg-gradient-to-r from-[#D2AE2F] to-[#A18634] text-black text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Sponsor Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
