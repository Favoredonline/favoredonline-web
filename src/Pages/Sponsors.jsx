import IMAGE from '../assets/smt.png';

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
              Support the <strong className="text-[#D2AE2F]">Favored Online Tech Summit</strong>, 
              where visionaries, innovators, and changemakers come together to create lasting impact.
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
            Fuel innovation, support emerging tech talent, and position your brand as a driving force for excellence. 
            By sponsoring the <strong className="text-[#0F2027]">Favored Online Tech Summit</strong>, you gain unparalleled access to changemakers, industry experts, and rising stars in technology. 
            Showcase your brand as a leader in innovation, thought leadership, and impact.
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

      {/* How Sponsor Funds Are Used */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Where Your Sponsorship Makes an Impact</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Your sponsorship directly fuels transformative initiatives aimed at shaping the future of technology. 
            By partnering with the <strong className="text-[#D2AE2F]">Favored Online Tech Summit</strong>, you become a force for change in two key areas:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-4 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-[#0F2027] mb-4">👩‍💻 Empowering Women in Tech</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Funds are used to support **She Model Tech**, a platform dedicated to providing women with leadership development, hands-on tech skills, and access to mentorship opportunities. 
              Through your sponsorship, we empower women to become trailblazers and leaders in the tech industry.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-[#0F2027] mb-4">🚀 Awarding Innovative Projects</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Through **TechTalents City**, we recognize and award innovative projects from our global community of contributors. 
              From groundbreaking solutions to impactful digital products, your support provides the resources to **award, support, and develop new ventures** that could change the world.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action at the Bottom */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Join Our Mission</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Empower dreams, open doors, and shape the future of technology by supporting the 
            <strong className="text-[#D2AE2F]"> Favored Online Tech Summit</strong>. 
            Be a driving force behind this transformative event that empowers tech leaders, 
            rising innovators, and the next generation of trailblazers.
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
