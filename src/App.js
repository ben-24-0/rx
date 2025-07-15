import "./App.css";

function App() {
  const teamValues = [
    {
      title: "REDEFINE",
      description:
        "We challenge conventional thinking and push boundaries to create innovative solutions that transform industries. Our clients change the world everyday and we are continually, relentlessly, and earnestly inspired.",
      icon: "🚀",
      color: "#E879F9" // Light purple/pink
    },
    {
      title: "REFINE",
      description:
        "We continuously improve and perfect our processes, ensuring excellence in every detail of our work. The digital and social media space moves quickly; we keep up for you.",
      icon: "✨",
      color: "#C084FC" // Medium purple
    },
    {
      title: "RISE",
      description:
        "We elevate ourselves and our clients to new heights, fostering growth and success in every endeavor. Developing killer results has been our thing for 9+ years.",
      icon: "📈",
      color: "#8B5CF6" // Dark purple
    }
  ];

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img
              src="/rx.jpg"
              alt="REFINE-X Logo"
              className="logo"
            />
            <span className="logo-text">REFINE<span className="accent">-X</span></span>
          </div>
          <div className="navbar-menu">
            <a href="#home" className="navbar-link">Home</a>
            <a href="#motive" className="navbar-link">Our Motive</a>
            <a href="#values" className="navbar-link">Our Values</a>
            <a href="#team" className="navbar-link">Team</a>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1 className="team-name">
            REFINE<span className="accent">-X</span>
          </h1>
          <p className="team-subtitle">TEAM 3</p>
        </div>
        <div className="header-decoration"></div>
      </header>

      {/* Motive Section */}
      <section className="motive-section">
        <div className="container">
          <h2 className="section-title">Our Motive</h2>
          <p className="motive-text">
            Empowering transformation through innovation, refinement, and
            relentless pursuit of excellence. We believe in reshaping the future
            by challenging the status quo and creating meaningful impact.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-organic-grid">
            {teamValues.map((value, index) => (
              <div 
                key={index} 
                className={`value-organic-card value-${index + 1}`}
              >
                <h3 
                  className="value-organic-title"
                  style={{ color: value.color }}
                >
                  {value.title}.
                </h3>
                <p className="value-organic-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 REFINE-X Team. Journey of Transformation.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
