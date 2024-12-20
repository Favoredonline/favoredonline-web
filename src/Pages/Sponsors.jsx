import IMAGE from '../assets/smt.png';

const Sponsors = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      
      {/* Event Hero Section */}
      <section className="bg-gradient-to-r from-[#1D3557] via-[#457B9D] to-[#A8DADC] text-white py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          <div className="text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Be the Catalyst for Innovation</h1>
            <p className="text-xl md:text-2xl leading-relaxed max-w-xl mx-auto md:mx-0">
              Join us in driving change, empowering excellence, and shaping the future of technology. 
              Support the <strong className="text-[#E63946]">Favored Online Tech Summit</strong>, 
              where visionaries, innovators, and changemakers come together to create lasting impact.
            </p>
            <div className="mt-6">
              <a 
                href="#sponsorship" 
                className="inline-block bg-gradient-to-r from-[#E63946] to-[#F4A261] text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
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
      <section className="bg-gradient-to-r from-[#F1FAEE] to-[#A8DADC] py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Fuel Innovation, Amplify Your Brand</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fuel innovation, support emerging tech talent, and position your brand as a driving force for excellence. 
            By sponsoring the <strong className="text-[#1D3557]">Favored Online Tech Summit</strong>, you gain unparalleled access to changemakers, industry experts, and rising stars in technology. 
            Showcase your brand as a leader in innovation, thought leadership, and impact.
          </p> 
        </div>
        <div className="flex justify-center mt-8">
          <a 
            href="#sponsorship" 
            className="inline-block bg-gradient-to-r from-[#E63946] to-[#F4A261] text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Explore Sponsorship Packages
          </a>
        </div>
      </section>

      {/* How Sponsor Funds Are Used */}
      <section className="bg-gradient-to-r from-[#1D3557] via-[#457B9D] to-[#A8DADC] text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Where Your Sponsorship Makes an Impact</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Your sponsorship directly fuels transformative initiatives aimed at shaping the future of technology. 
            By partnering with the <strong className="text-[#E63946]">Favored Online Tech Summit</strong>, you become a force for change in two key areas:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-4 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-[#1D3557] mb-4">👩‍💻 Empowering Women in Tech</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Sponsorship funds fuel **Women in Tech Leadership Sessions**, fostering mentorship, networking, and skills training for aspiring female leaders. By supporting this initiative, you help create a thriving environment where women can excel and lead in the tech industry.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-[#1D3557] mb-4">🚀 Celebrating TechTalents Innovation</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Through **TechTalents City**, we identify and celebrate groundbreaking projects. Categories like Best Developer, Most Innovative Solution, and Rising Star provide recognition and support for the brightest minds in tech to bring their ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Networking and Job Fair */}
      <section className="bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-white py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6">Networking and Job Fair</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Meet and connect with hiring companies and tech leaders. Participate in our job fair featuring top tech companies, opening doors to incredible career opportunities.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Experience memorable moments from past events through our exclusive photo gallery.</p>
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

      {/* Speakers Section */}
      <section className="bg-gradient-to-r from-[#1D3557] via-[#457B9D] to-[#A8DADC] text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Meet Our Speakers</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Get inspired by a lineup of industry leaders and innovators sharing their insights and experiences in technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mt-12">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src={IMAGE} alt={`Speaker ${index + 1}`} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Speaker {index + 1}</h3>
              <p className="text-gray-600">Tech Innovator and Leader</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action at the Bottom */}
      <section className="bg-gradient-to-r from-[#1D3557] via-[#457B9D] to-[#A8DADC] text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Join Our Mission</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Empower dreams, open doors, and shape the future of technology by supporting the 
            <strong className="text-[#E63946]"> Favored Online Tech Summit</strong>. 
            Be a driving force behind this transformative event that empowers tech leaders, 
            rising innovators, and the next generation of trailblazers.
          </p>
          <a 
            href="#sponsorship" 
            className="inline-block bg-gradient-to-r from-[#E63946] to-[#F4A261] text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Sponsor Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
