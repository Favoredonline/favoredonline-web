import IMAGE from '../assets/smt.png';
import LOGO from '../assets/logo.png';

const Sponsors = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      
      {/* Event Hero Section */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          <div className="text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Partner with Us</h1>
            <p className="text-xl md:text-2xl leading-relaxed max-w-xl mx-auto md:mx-0">
              Join us in shaping the future of technology through impactful partnerships. Support the <strong className="text-[#D2AE2F]">She Model Tech Summit</strong> and the <strong className="text-[#EB48D5]">TechTalents City Conference</strong> to empower innovation and excellence.
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
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Sponsorship Opportunities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Be part of these transformative events by becoming a sponsor. Showcase your brand, support innovation, and connect with a diverse audience of tech professionals, leaders, and enthusiasts.
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
            Your support can make a lasting impact. Partner with us to drive innovation, empower communities, and shape the future of technology together.
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
