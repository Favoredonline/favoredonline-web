import { useState } from 'react';
import LOGO from '../assets/logo.png'; // Using logo for all placeholders

const Summit = () => {
  const [activeTab, setActiveTab] = useState('techtalents');

  return (
    <div className="mx-auto px-6 sm:px-8 lg:px-10 mb-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#60A5FA] text-white py-20 px-8">
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
              src={LOGO}
              alt="Summit Logo"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
        {/* Theme for 2025 Section */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Theme for 2025</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            <span className="italic font-semibold">"Leading with Innovation: Building a Collaborative Future"</span>. This year’s theme emphasizes creativity, collaboration, and empowering talent from novice to expert within the tech ecosystem.
          </p>
        </div>
      </section>

      {/* TechTalents Awards and Women in Tech Section */}
      <section className="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white py-20 px-8 rounded-lg shadow-md border-t border-gray-300">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold mb-6">Empowering Innovation and Leadership</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Discover how we celebrate innovation and empower tech talent through recognition, mentorship, and collaboration.
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <button
            className={`px-6 py-3 text-lg font-bold rounded-full ${
              activeTab === 'techtalents'
                ? 'bg-white text-[#2563EB]'
                : 'bg-[#2563EB] text-white'
            } transition`}
            onClick={() => setActiveTab('techtalents')}
          >
            TechTalents Awards
          </button>
          <button
            className={`px-6 py-3 text-lg font-bold rounded-full ${
              activeTab === 'womenintech'
                ? 'bg-white text-[#2563EB]'
                : 'bg-[#2563EB] text-white'
            } transition ml-4`}
            onClick={() => setActiveTab('womenintech')}
          >
            Women in Tech
          </button>
        </div>
        {activeTab === 'techtalents' && (
          <div className="text-center">
            <h3 className="text-3xl font-extrabold mb-4">TechTalents Awards for Innovation</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Through <span className="font-semibold">TechTalents City</span>, celebrate groundbreaking projects with awards such as Best Developer, Most Innovative Solution, and Rising Star. Help bring brilliant ideas to life and shape the future of technology.
            </p>
          </div>
        )}
        {activeTab === 'womenintech' && (
          <div className="text-center">
            <h3 className="text-3xl font-extrabold mb-4">Women in Tech: Thriving and Leading</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Empowering women in technology through leadership sessions, networking opportunities, and mentorship programs. Learn how to excel in tech leadership roles and shape the future of innovation.
            </p>
          </div>
        )}
      </section>

      {/* Speakers Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#60A5FA] text-white py-20 px-8 rounded-lg shadow-md border-t border-gray-300">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Meet Our Speakers</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Be inspired by leading industry experts and innovators sharing their insights and experiences.
          </p>
        </div>
        <div className="overflow-x-scroll whitespace-nowrap">
          <div className="inline-flex space-x-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center min-w-[250px]">
                <img
                  src={LOGO}
                  alt={`Speaker ${index + 1}`}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Speaker {index + 1}</h3>
                <p className="text-gray-600">Expert in Innovation</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Networking Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#60A5FA] text-white py-20 px-8 rounded-lg shadow-md border-t border-gray-300">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Networking and Sponsors</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Meet with hiring companies, industry leaders, and sponsors. Participate in our job fair and networking sessions, opening doors to new career opportunities while connecting with tech enthusiasts.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
            {[...Array(12)].map((_, index) => (
              <img
                key={index}
                src={LOGO}
                alt={`Sponsor Logo ${index + 1}`}
                className="w-32 h-auto object-contain rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-20 px-8 rounded-lg shadow-md border-t border-gray-300">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the highlights from past events through our exclusive gallery.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <img
              key={index}
              src={LOGO}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#60A5FA] text-white py-20 px-8 rounded-lg shadow-md border-t border-gray-300">
        <div className="text-center">
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

