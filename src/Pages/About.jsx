import IMAGE from '../assets/lady.jpg';

const About = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', marginBottom: '40px' }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '2rem',
          lineHeight: '1.2',
          marginBottom: '20px'
        }}>
          About Favored Online Inc.
        </p>
        <p style={{
          color: '#ffffff',
          fontSize: '1rem',
          lineHeight: '1.8',
          marginTop: '20px'
        }}>
          <strong>Favored Online Inc.</strong>, founded in July 2018 and originally registered as Favored Online Skills Acquisition Network in March 2020, serves as the parent holding company for two initiatives: 
          <strong style={{ color: '#D2AE2F' }}> TechTalents City </strong> 
          and 
          <strong style={{ color: '#EB48D5' }}> She Model Tech </strong>, 
          with a commitment to growth and innovation, and plans to introduce more initiatives in the future.
        </p>
      </div>

      {/* Vision and Mission Section */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr', 
        gap: '20px', 
        color: '#ffffff', 
        marginTop: '40px', 
        marginBottom: '60px' 
      }}>
        <div style={{ marginBottom: '20px' }}>
          <p style={{ 
            fontSize: '1.75rem', 
            fontWeight: '600', 
            marginBottom: '15px' 
          }}>
            Our Vision
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            To be the global leader in empowering tech professionals through innovative solutions and transformative technologies.
          </p>
        </div>
        <div>
          <p style={{ 
            fontSize: '1.75rem', 
            fontWeight: '600', 
            marginBottom: '15px' 
          }}>
            Our Mission
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            By developing innovative technologies and solutions, we empower professionals across industries with the skills, tools, and resources needed to excel in a constantly evolving tech-driven world.
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '30px', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: '60px' 
      }}>
        <div style={{ 
          width: '100%', 
          maxWidth: '500px', 
          height: 'auto', 
          borderRadius: '20px', 
          overflow: 'hidden', 
          boxShadow: '0px 10px 30px rgba(0,0,0,0.1)' 
        }}>
          <img 
            src={IMAGE} 
            alt="Founder" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              objectFit: 'cover' 
            }} 
          />
        </div>
        <div style={{ 
          textAlign: 'center', 
          color: '#ffffff', 
          maxWidth: '700px' 
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '20px' 
          }}>
            Meet Our Founder
          </h2>
          <p style={{ 
            fontSize: '1rem', 
            lineHeight: '1.8', 
            marginBottom: '20px' 
          }}>
            Hello, I'm Opeyemi T. Adeniran, an Author, AI Research Engineer, and the Founder of 
            <strong style={{ color: '#D2AE2F' }}> TechTalents City</strong>, 
            <strong style={{ color: '#EB48D5' }}> She Model Tech</strong> and 
            <a 
              href="https://www.morgantechfest.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                fontWeight: '600', 
                textDecoration: 'underline', 
                color: '#ffffff' 
              }}
            >
              Morgan TechFest
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
