import IMAGE from '../assets/lady.jpg';

const About = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      
{/* About Section */}
<section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-20">
  <div className="text-center px-4">
    <h1 className="text-4xl lg:text-5xl font-extrabold mb-10 leading-tight">About Favored Online</h1>
    <p className="text-xl md:text-2xl leading-relaxed lg:leading-loose mx-auto max-w-4xl">
      <strong>Favored Online Inc.</strong> is a tech holding company that facilitates the hosting of Tech Summits, with a focus on inspiring and cultivating the next wave of technology through education. It serves as the parent holding company for two key initiatives: 
      <strong className="text-[#D2AE2F]"> 
        <a href="https://techtalentscity.com" target="_blank" rel="noopener noreferrer">TechTalents City</a>
      </strong> 
      and 
      <strong className="text-[#EB48D5]"> 
        <a href="https://shemodeltech.com" target="_blank" rel="noopener noreferrer">She Model Tech</a>
      </strong>
    </p>
  </div>
</section>


      {/* Mission and Vision Section */}
      <section className="grid md:grid-cols-2 gap-8 md:gap-5 lg:gap-10 my-16">
        <div className="bg-white text-black p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl text-[#D2AE2F] font-bold mb-5">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to continuously develop solutions and technologies that advance education, empowering innovators and professionals to learn, grow, and create transformative technologies for a better world.
          </p>
        </div>
        <div className="bg-white text-black p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl text-[#EB48D5] font-bold mb-5">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            Our vision is to develop educational technologies that empower innovators and professionals to unlock their full potential.
          </p>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:mx-20">
          <div className="md:w-1/2 lg:w-1/3 shrink-0">
            <img 
              src={IMAGE} 
              alt="Founder of Favored Online Inc." 
              className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover object-center rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-white flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold mb-6">Meet Our Founder</h2>
            <p className="text-lg leading-relaxed">
              Founded by 
              <a 
                href="https://www.opeyemitaiwoadeniran.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#D2AE2F] font-bold underline hover:text-[#A18634] transition-colors"
              >
                Opeyemi T. Adeniran
              </a>, 
              in July 2018, and originally registered as Favored Online Skills Acquisition Network in March 2020, 
              the company was rebranded and officially incorporated as Favored Online Inc. in Delaware, USA, in August 2024.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
