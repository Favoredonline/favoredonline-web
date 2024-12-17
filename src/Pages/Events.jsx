import ladyImage from '../assets/lady.jpg';

const Events = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      
      {/* Events Section */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-8">About Favored Online Tech Events</h1>
          <p className="text-xl md:text-2xl leading-relaxed mx-auto max-w-3xl">
            <strong>Favored Online Inc.</strong> proudly hosts two premier tech events:
            <strong className="text-[#D2AE2F]"> She Model Tech Summit </strong> 
            and 
            <strong className="text-[#EB48D5]"> Favored Online iTech.</strong> 
            These events are designed to showcase innovation, foster networking, and empower tech talent.
          </p>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section className="grid md:grid-cols-2 gap-8 md:gap-5 lg:gap-10 my-16">
        <div className="bg-white text-black p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl text-[#D2AE2F] font-bold mb-5">Event Highlights</h2>
          <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
            <li>Dynamic Keynote Speeches</li>
            <li>Expert Panel Discussions</li>
            <li>Interactive Tech Talks</li>
            <li>Project Showcase through TechTalents City</li>
            <li>Job Fair with top industry recruiters</li>
            <li>Award for Innovation among Participants</li>
          </ul>
        </div>
        <div className="bg-white text-black p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl text-[#EB48D5] font-bold mb-5">Why Attend?</h2>
          <p className="text-lg leading-relaxed">
            Join industry leaders, aspiring innovators, and tech enthusiasts to explore the latest in technology, connect with hiring companies, and showcase your skills. Gain access to workshops, networking sessions, and competitions designed to inspire and empower.
          </p>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-10">Featured Speakers</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Industry experts, thought leaders, and changemakers from across the globe will be sharing insights and trends at the She Model Tech Summit and Favored Online iTech.
          </p>
        </div>
      </section>

      {/* Sponsorship & Partnership Section */}
      <section className="py-20 bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold">Sponsorship & Partnership Packages</h2>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold">Gallery</h2>
          <p className="text-lg leading-relaxed">Relive moments from previous events and see what's in store for the future.</p>
        </div>
      </section>

      {/* Sponsors & Partners Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold">Our Sponsors & Partners</h2>
        </div>
      </section>

      {/* Dates & Location Section */}
      <section className="py-20 bg-gradient-to-r from-[#203A43] via-[#2C5364] to-[#0F2027] text-white">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">Dates, Location & Time</h2>
          <p className="text-lg leading-relaxed mt-5">Mark your calendars for these transformative events. Full event schedules will be available soon.</p>
        </div>
      </section>

      {/* Upload Projects Section */}
      <section className="bg-white py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold">Upload Your Projects / Resume</h2>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">Programs</h2>
        </div>
      </section>

      {/* Yearly Calendar Section */}
      <section className="bg-white py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold">Yearly Calendar</h2>
          <p className="text-lg leading-relaxed">View the full schedule for both She Model Tech Summit and Favored Online iTech.</p>
        </div>
      </section>
    </div>
  );
};

export default Events;
