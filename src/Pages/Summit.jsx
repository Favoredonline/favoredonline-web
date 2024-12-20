import SPEAKER_PLACEHOLDER from '../assets/lady.jpg';
import IMAGE from '../assets/smt.png';

const FavoredOnlineSummit = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#EB48D5] to-[#C037A9] text-white py-20">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Favored Online Summit</h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            A two-day experience of leadership, innovation, and technology. Join us for inspiring panel discussions, award ceremonies, networking opportunities, and showcases of groundbreaking projects. 
            This is your moment to connect, learn, and lead.
          </p>
        </div>
      </section>

      {/* Key Highlights and Details */}
      <section className="bg-white py-20">
        <div className="grid md:grid-cols-2 gap-8 px-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h3>
            <ul className="text-lg text-gray-600 list-disc list-inside">
              <li>Leadership Talks & Panel Discussions</li>
              <li>Showcase of Viable and Innovative Projects</li>
              <li>Tech Talks on Emerging Technologies</li>
              <li>Award Ceremony for TechTalents Community Members</li>
              <li>Job Fair and Exclusive Networking Opportunities</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Event Details</h3>
            <p className="text-lg text-gray-600">
              <strong>Date:</strong> March 10-12, 2025<br />
              <strong>Location:</strong> Lagos, Nigeria & Online
            </p>
          </div>
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

      {/* Award Section */}
      <section className="bg-gradient-to-r from-[#C037A9] to-[#EB48D5] text-white py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6">TechTalents Awards</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Celebrate the achievements of our incredible community members. From Novice-to-Expert transformations to Best Tech Leads and Product Owners, join us as we recognize excellence and innovation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🏆 Most Progressive (Novice to Expert)</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🌟 Best Product Owner</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🛠️ Best Tech Lead</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">💻 Best Developer</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 Best Innovative Project</h3>
          </div>
        </div>
      </section>

      {/* Networking Section */}
      <section className="bg-gray-50 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Networking & Job Fair</h2>
          <p className="text-lg text-gray-600">
            Connect with recruiters, industry leaders, and company representatives. Get hired, find a mentor, and form lasting professional relationships.
          </p>
        </div>
      </section>

      {/* Register Section */}
      <section className="bg-gradient-to-r from-[#D2AE2F] to-[#A18634] text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Register Now</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Don’t miss your chance to be part of the Favored Online Summit. Gain insights, get inspired, and connect with industry leaders.
          </p>
          <a
            href="#register"
            className="inline-block bg-white text-[#C037A9] text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Register for Favored Online Summit
          </a>
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
};

export default FavoredOnlineSummit;
