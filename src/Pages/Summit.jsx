import SPEAKER_PLACEHOLDER from '../assets/lady.jpg';
import IMAGE from '../assets/smt.png';
import LOGO from '../assets/logo.png';

const Summit = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] text-white py-20">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Favored Online Summit</h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            A two-day event celebrating leadership, innovation, and collaboration. Join us for interactive panel discussions, inspiring leadership talks, prestigious community awards, and exclusive insights from industry experts. 
          </p>
        </div>
      </section>

      {/* Theme Section */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Theme for 2025</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            **"Leading with Innovation: Building a Collaborative Future"**. This year’s theme focuses on driving leadership, fostering innovation, and empowering talent from novice to expert within the tech ecosystem.
          </p>
        </div>
      </section>

      {/* Key Highlights and Details */}
      <section className="bg-white py-20">
        <div className="grid md:grid-cols-2 gap-8 px-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h3>
            <ul className="text-lg text-gray-600 list-disc list-inside">
              <li>Leadership Talks & Engaging Panel Discussions</li>
              <li>Tech Talks on Emerging Technologies</li>
              <li>Exclusive Awards for TechTalents City Contributors</li>
              <li>Opportunities for Thought Leadership and Insights</li>
              <li>Industry Insights from Esteemed Speakers</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Event Details</h3>
            <p className="text-lg text-gray-600">
              <strong>Date:</strong> March 10-12, 2025<br />
              <strong>Location:</strong> Hybrid Event (In-Person & Online)
            </p>
          </div>
        </div>
      </section>

      {/* Women in Tech Section */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Women in Tech: Thriving and Leading</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            A powerful session focused on amplifying women’s leadership in tech. Join us for an engaging panel discussion and a keynote address from a leading woman in technology. Explore strategies, insights, and practical guidance on thriving as a woman in tech leadership roles.
          </p>
        </div>
      </section>

      {/* Speaker Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Meet Our Speakers</h2>
        </div>
        <div id="summit-carousel" className="carousel flex justify-center overflow-x-auto gap-6 px-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-40 h-40 flex flex-col items-center bg-gray-200 rounded-full shadow-md flex-shrink-0">
              <img src={SPEAKER_PLACEHOLDER} alt="Speaker" className="w-full h-full rounded-full object-cover" />
              <p className="text-center mt-2 text-sm font-semibold">Speaker {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Award for Innovation Section */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] text-white py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6">TechTalents Awards for Innovation</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Recognizing groundbreaking projects from TechTalents City. Contributors apply for awards through the TechTalents City dashboard. Categories include Best Product Owner, Best Developer, and Most Innovative Project.
          </p>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-white py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6">Our Esteemed Sponsors</h2>
          <p className="text-lg text-gray-600">We are proud to be supported by organizations committed to advancing innovation, excellence, and opportunity in the tech industry.</p>
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

      {/* Register Section */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Register Now</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Don’t miss the Favored Online Summit. Secure your spot to gain insights, network with leaders, and celebrate innovation and leadership.
          </p>
          <a
            href="#register"
            className="inline-block bg-white text-[#0F2027] text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Register for Favored Online Summit
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Gallery</h2>
          <p className="text-lg text-gray-600">Take a look at memorable moments from past events through our exclusive photo gallery.</p>
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
      </section>
    </div>
  );
};

export default Summit;
