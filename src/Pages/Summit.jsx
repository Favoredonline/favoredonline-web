import SPEAKER_PLACEHOLDER from '../assets/lady.jpg';
import IMAGE from '../assets/smt.png';
import LOGO from '../assets/logo.png';

const Summit = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#60A5FA] text-white py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Favored Online Tech Summit</h1>
            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto md:mx-0">
              A celebration of achievements, recognizing individuals and teams who have made outstanding contributions in technology and innovation. Join us for panel discussions, leadership talks, awards, and insights from industry experts.
            </p>
            <div className="mt-8">
              <a
                href="#register"
                className="inline-block bg-white text-[#1E3A8A] text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Register for the Summit
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={IMAGE} 
              alt="Tech Summit Demo" 
              className="w-full max-w-md rounded-xl shadow-lg" 
            />
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#60A5FA] text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Theme for 2025</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            **"Leading with Innovation: Building a Collaborative Future"**. This year’s theme emphasizes creativity, collaboration, and empowering talent from novice to expert within the tech ecosystem.
          </p>
        </div>
      </section>

      {/* Women in Tech Section */}
      <section className="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Women in Tech: Thriving and Leading</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Empowering women in technology through leadership sessions, hands-on training, and mentorship opportunities. Explore strategies and insights to elevate women’s roles in tech leadership and innovation.
          </p>
        </div>
      </section>

      {/* TechTalents Section */}
      <section className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] text-white py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6">TechTalents Awards for Innovation</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Recognizing groundbreaking projects through TechTalents City. Celebrate innovation with awards like Best Product Owner, Best Developer, and Most Innovative Project.
          </p>
        </div>
      </section>

      {/* Key Highlights and Details */}
      <section className="bg-gray-100 py-20">
        <div className="grid md:grid-cols-2 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h3>
            <ul className="text-lg text-gray-600 list-disc list-inside">
              <li>Leadership Talks & Engaging Panel Discussions</li>
              <li>Tech Talks on Emerging Technologies</li>
              <li>Exclusive Awards for TechTalents City Contributors</li>
              <li>Opportunities for Thought Leadership and Insights</li>
              <li>Industry Insights from Esteemed Speakers</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Event Details</h3>
            <p className="text-lg text-gray-600">
              <strong>Date:</strong> March 10-12, 2025<br />
              <strong>Location:</strong> Hybrid Event (In-Person & Online)
            </p>
            <div className="mt-8">
              <a
                href="#register"
                className="inline-block bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Register for the Summit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-gray-100 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6">Our Esteemed Sponsors</h2>
          <p className="text-lg text-gray-600">Supported by organizations committed to advancing innovation, excellence, and opportunity in the tech industry.</p>
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
    </div>
  );
};

export default Summit;
