import IMAGE from '../assets/lady.jpg';

const Events = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      
      {/* Event Hero Section */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-8">Welcome to Favored Online Tech Events</h1>
          <p className="text-xl md:text-2xl leading-relaxed mx-auto max-w-3xl">
            Experience the <strong className="text-[#D2AE2F]">She Model Tech Summit</strong> and the <strong className="text-[#EB48D5]">TechTalents City Conference</strong> 
            where technology, innovation, and collaboration take center stage. Participate in dynamic sessions, project showcases, and our exclusive job fair.
          </p>
          <a 
            href="#register" 
            className="mt-6 inline-block bg-[#D2AE2F] text-black text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#A18634] transition-colors"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6">Gallery</h2>
          <p className="text-lg">Explore moments from our past events through our exclusive photo gallery.</p>
          <a href="#gallery" className="mt-4 inline-block bg-[#D2AE2F] text-black text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#A18634] transition-colors">View Gallery</a>
        </div>
      </section>

      {/* Sponsorship & Partnership Section */}
      <section className="bg-gray-900 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-white mb-6">Sponsorship & Partnership</h2>
          <p className="text-lg text-white">Partner with us to make a lasting impact. Click the link below to access our sponsorship and partnership document.</p>
          <a href="#sponsorship" className="mt-4 inline-block bg-[#D2AE2F] text-black text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#A18634] transition-colors">Download Document</a>
        </div>
      </section>

      {/* She Model Tech Summit Section */}
      <section className="bg-white py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6">She Model Tech Summit</h2>
          <p className="text-lg leading-relaxed mx-auto max-w-3xl">
            The She Model Tech Summit is designed to inspire and empower women in technology. Join us to explore impactful discussions, exciting panels, and dynamic programs that spotlight innovation and creativity.
          </p>
          <a 
            href="#shemodeltech" 
            className="mt-6 inline-block bg-[#EB48D5] text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#C037A9] transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* TechTalents City Conference Section */}
      <section className="bg-gray-100 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-6">TechTalents City Conference</h2>
          <p className="text-lg leading-relaxed mx-auto max-w-3xl">
            The TechTalents City Conference is the hub of innovation and collaboration. Dive into sessions on cutting-edge technology, network with experts, and showcase your projects in a vibrant environment.
          </p>
          <a 
            href="#techtalentscity" 
            className="mt-6 inline-block bg-[#D2AE2F] text-black text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#A18634] transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black py-10 text-center text-white">
        <p className="text-lg">&copy; 2025 Favored Online Tech Events. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Events;
