{/* Networking and Sponsors Section */}
<section className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#60A5FA] text-white py-20 px-8 rounded-lg shadow-md border-b border-gray-300">
  <div className="text-center">
    <h2 className="text-4xl font-extrabold mb-6">Networking and Sponsors</h2>
    <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
      Meet with hiring companies, industry leaders, and sponsors. Participate in our job fair and networking sessions, opening doors to new career opportunities while connecting with tech enthusiasts.
    </p>
    {/* Sponsors Logos */}
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
