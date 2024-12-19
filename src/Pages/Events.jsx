import IMAGE from '../assets/smt.png';
import LOGO from '../assets/logo.png';

const Events = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      
      {/* Event Hero Section */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          <div className="text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Welcome to Favored Online Tech Events</h1>
            <p className="text-xl md:text-2xl leading-relaxed max-w-xl mx-auto md:mx-0">
              Experience the <strong className="text-[#D2AE2F]">She Model Tech Summit</strong> and the <strong className="text-[#EB48D5]">TechTalents City Conference</strong>, where innovation, empowerment, and opportunity collide to shape the future of technology..
            </p>
            <a 
              href="#register" 
              className="mt-6 inline-block bg-gradient-to-r from-[#D2AE2F] to-[#A18634] text-black text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Register Now
            </a>
          </div>
          <div>
            <img src={IMAGE} alt="Event Illustration" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* She Model Tech Summit Section */}
      <section className="bg-white py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6">She Model Tech Summit</h2>
          <p className="text-lg leading-relaxed text-gray-600 mx-auto max-w-3xl">
            The She Model Tech Summit is designed to inspire and empower women in technology. Join us for insightful panels, programs, and networking opportunities that celebrate innovation and creativity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 px-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h3>
            <ul className="text-lg text-gray-600 list-disc list-inside">
              <li>Inspiring Panel Discussions</li>
              <li>Networking Opportunities</li>
              <li>Exclusive Programs</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Event Details</h3>
            <p className="text-lg text-gray-600">
              <strong>Date:</strong> March 10-12, 2025<br />
              <strong>Location:</strong> Lagos, Nigeria
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a 
            href="#shemodeltech" 
            className="bg-gradient-to-r from-[#EB48D5] to-[#C037A9] text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* TechTalents City Conference Section */}
      <section className="bg-gray-50 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">TechTalents City Conference</h2>
          <p className="text-lg leading-relaxed text-gray-600 mx-auto max-w-3xl">
            The TechTalents City Conference is the hub for innovation, collaboration, and growth. Explore sessions on emerging technologies, showcase your projects, and connect with industry leaders.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 px-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h3>
            <ul className="text-lg text-gray-600 list-disc list-inside">
              <li>Cutting-edge Technology Discussions</li>
              <li>Project Showcases</li>
              <li>Award for Innovation</li>
              <li>Job Fair</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Event Details</h3>
            <p className="text-lg text-gray-600">
              <strong>Date:</strong> June 15-17, 2025<br />
              <strong>Location:</strong> Nairobi, Kenya
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a 
            href="#techtalentscity" 
            className="bg-gradient-to-r from-[#D2AE2F] to-[#A18634] text-black text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-white py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6">Our Sponsors</h2>
          <p className="text-lg text-gray-600">We are proud to be supported by leading organizations driving innovation and excellence.</p>
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

      {/* Gallery Section */}
      <section className="bg-gray-50 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Gallery</h2>
          <p className="text-lg text-gray-600">Explore moments from our past events through our exclusive photo gallery.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <img 
              key={index} 
              src={IMAGE} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <a 
            href="#gallery" 
            className="inline-block bg-gradient-to-r from-[#D2AE2F] to-[#A18634] text-black text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            View Full Gallery
          </a>
        </div>
      </section>
    </div>
  );
}

export default Events;
