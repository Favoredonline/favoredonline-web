const About = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    marginBottom: '40px',
    color: '#ffffff'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px'
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '2.5rem',
    lineHeight: '1.2',
    marginBottom: '20px'
  };

  const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: '1.8',
    marginTop: '20px'
  };

  const nameLinkStyle = {
    color: '#ffffff', // White text
    fontWeight: 'bold',
    fontStyle: 'italic',
    position: 'relative',
    textDecoration: 'none'
  };

  const underlineStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: '#81bb36', // Green underline color
    transform: 'scaleX(1)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease-in-out'
  };

  const linkHoverEffect = {
    ...nameLinkStyle,
    textDecoration: 'none'
  };

  const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginTop: '40px',
    marginBottom: '60px'
  };

  const articleStyle = {
    marginBottom: '20px'
  };

  const headingStyle = {
    fontSize: '1.75rem',
    fontWeight: '600',
    marginBottom: '15px'
  };

  const textStyle = {
    fontSize: '1rem',
    lineHeight: '1.8'
  };

  return (
    <div style={containerStyle}>
      
      {/* Header Section */}
      <header style={headerStyle}>
        <h1 style={titleStyle}>About Favored Online Inc.</h1>
        <p style={paragraphStyle}>
          <strong>Favored Online Inc.</strong>, founded in July 2018 by   
          <a 
            href="https://www.opeyemitaiwoadeniran.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={nameLinkStyle}
          >
             Opeyemi Taiwo Adeniran 
            <span style={underlineStyle}></span>
          </a> 
            and registered as Favored Online Skills Acquisition Network in March 2020, serves as the parent holding company for two initiatives: 
          <strong style={{ color: '#D2AE2F' }}> TechTalents City </strong> 
          and 
          <strong style={{ color: '#EB48D5' }}> She Model Tech </strong>, 
          with a commitment to growth and innovation, and plans to introduce more initiatives in the future.
        </p>
      </header>

      {/* Vision and Mission Section */}
      <section style={sectionStyle}>
        <article style={articleStyle}>
          <h2 style={headingStyle}>Our Vision</h2>
          <p style={textStyle}>
            To be the global leader in empowering tech professionals through innovative solutions and transformative technologies.
          </p>
        </article>

        <article style={articleStyle}>
          <h2 style={headingStyle}>Our Mission</h2>
          <p style={textStyle}>
            By developing innovative technologies and solutions, we empower professionals across industries with the skills, tools, and resources needed to excel in a constantly evolving tech-driven world.
          </p>
        </article>
      </section>
    </div>
  );
}

export default About;
