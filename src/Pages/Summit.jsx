import SPEAKER_PLACEHOLDER from '../assets/lady.jpg';
import IMAGE from '../assets/smt.png';
import LOGO from '../assets/logo.png';

const Summit = () => {
  return (
    <div className="mx-auto px-6 sm:px-8 lg:px-10 mb-10">
      
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
        <div className="text-center px-6">
          <h2 className="text-4xl font-extrabold mb-6">Theme for 2025</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            **"Leading with Innovation: Building a Collaborative Future"**. This year’s theme emphasizes creativity, collaboration, and empowering talent from novice to expert within the tech ecosystem.
          </p>
        </div>
      </section>

      {/* Women in Tech Section */}
      <section className="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white py-20">
        <div className="text-center px-6">
          <h2 className="text-4xl font-extrabold mb-6">Women in Tech: Thriving and Leading</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Empowering women in technology through leadership sessions, networking opportunities, and mentorship programs. Learn how to excel in tech leadership roles and shape the future of innovation.
          </p>
        </div>
      </section>

      {/* TechTalents Section */}
      <section className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] text-white py-20">
        <div className="text-center px-6 mb-10">
          <h2 className="text-4xl font-extrabold mb-6">TechTalents Awards for Innovation</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Through **TechTalents City**, celebrate groundbreaking projects with awards such as Best Developer, Most Innovative Solution, and Rising Star. Help bring brilliant ideas to life.
          </p>
        </div>
      </section>

      {/* Networking and Job Fair Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#60A5FA] text-white py-20">
        <div className="text-center px-6">
          <h2 className="text-4xl font-extrabold mb-6">Networking and Job Fair</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Meet with hiring companies and industry leaders. Participate in our job fair featuring top tech companies, opening doors to new career opportunities.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-20">
        <div className="text-center mb-10 px-6">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Experience the highlights from past events through our exclusive gallery.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
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
            className="inline-block bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            View More Images
          </a>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#60A5FA] text-white py-20">
        <div className="text-center px-6">
          <h2 className="text-4xl font-extrabold mb-6">Meet Our Speakers</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Be inspired by leading industry experts and innovators sharing their insights and experiences.
          </p>
        </div>
        <div className="overflow-x-scroll whitespace-nowrap px-6">
          <div className="inline-flex space-x-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center min-w-[200px]">
                <img src={SPEAKER_PLACEHOLDER} alt={`Speaker ${index + 1}`} className="w-24 h-24 mx-auto rounded-full mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Speaker {index + 1}</h3>
                <p className="text-gray-600">Expert in Innovation</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#60A5FA] text-white py-20">
        <div className="text-center px-6">
          <h2 className="text-4xl font-extrabold mb-6">Join Us</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Don’t miss out on this transformative event. Connect with tech leaders, explore career opportunities, and celebrate innovation.
          </p>
          <a
            href="#register"
            className="inline-block bg-white text-[#1E3A8A] text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Summit;
