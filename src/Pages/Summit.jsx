import SPEAKER_PLACEHOLDER from '../assets/lady.jpg';


const Summit = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#EB48D5] to-[#C037A9] text-white py-20">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">She Model Tech Summit</h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            A transformative event dedicated to inspiring, equipping, and empowering women to become trailblazers and leaders in technology. Join us for an unforgettable experience that will elevate your leadership skills and amplify your voice in the tech industry.
          </p>
        </div>
      </section>

      {/* Key Highlights and Details */}
      <section className="bg-white py-20">
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
      </section>

      {/* Speaker Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Meet Our Speakers</h2>
        </div>
        <div id="smt-carousel" className="carousel flex justify-center overflow-x-auto gap-6 px-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-40 h-40 flex flex-col items-center bg-gray-200 rounded-full shadow-md flex-shrink-0">
              <img src={SPEAKER_PLACEHOLDER} alt="Speaker" className="w-full h-full rounded-full object-cover" />
              <p className="text-center mt-2 text-sm font-semibold">Speaker {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Register Section */}
      <section className="bg-gradient-to-r from-[#C037A9] to-[#EB48D5] text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">Register Now</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Secure your spot today and be part of this transformative experience. Learn, network, and grow with us at the She Model Tech Summit.
          </p>
          <a
            href="#register"
            className="inline-block bg-white text-[#C037A9] text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Register for She Model Tech Summit
          </a>
        </div>
      </section>
    </div>
  );
};

export default Summit;

