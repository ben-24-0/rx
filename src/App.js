import "./App.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHoverDevice, setIsHoverDevice] = useState(true);

  // Detect if device supports hover
  useEffect(() => {
    const checkHoverSupport = () => {
      const hasHover = window.matchMedia('(hover: hover)').matches;
      setIsHoverDevice(hasHover);
    };
    
    checkHoverSupport();
    window.addEventListener('resize', checkHoverSupport);
    
    return () => window.removeEventListener('resize', checkHoverSupport);
  }, []);
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Smooth scrolling function for navbar links
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const teamValues = [
    {
      title: "REDEFINE",
      description:
        "We challenge conventional thinking and push boundaries to create innovative solutions that transform industries. Our clients change the world everyday and we are continually, relentlessly, and earnestly inspired.",
      icon: "🚀",
      color: "#E879F9", // Light purple/pink
    },
    {
      title: "REFINE",
      description:
        "We continuously improve and perfect our processes, ensuring excellence in every detail of our work. The digital and social media space moves quickly; we keep up for you.",
      icon: "✨",
      color: "#C084FC", // Medium purple
    },
    {
      title: "RISE",
      description:
        "We elevate ourselves and our clients to new heights, fostering growth and success in every endeavor. Developing killer results has been our thing for 9+ years.",
      icon: "📈",
      color: "#8B5CF6", // Dark purple
    },
  ];

  const teamMembers = [
    {
      name: "Benson Eldho",
      role: "Team Captain",
      image: "/team/benson.jpg",
    },
    {
      name: "Abhinav Krishna",
      role: "Vice Captain",
      image: "/team/abhinav.jpg",
    },
    {
      name: "Ashna Afsal",
      role: "member",
      image: "/team/ashna1.jpg",
    },
    {
      name: "Adarsh NA",
      role: "member",
      image: "/team/adarsh.jpg",
    },
    {
      name: "Ann Rose PJ",
      role: "Scribe",
      image: "/team/ann.jpg",
    },
    {
      name: "Arsha Mario",
      role: "member",
      image: "/team/arsha.jpg",
    },
    {
      name: "Abin Joy",
      role: "member",
      image: "/team/abin.jpg",
    },
    {
      name: "Abhin Pradeep",
      role: "member",
      image: "/team/abhin.jpg",
    },
  ];

  return (
    <div className="App">
      {/* Navigation Bar */}
      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="navbar-container">
          <motion.div
            className="navbar-logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/rx.jpg" alt="REFINE-X Logo" className="logo" />
            <span className="logo-text">
              REFINE<span className="accent">-X</span>
            </span>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>

          <motion.div
            className={`navbar-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              className="navbar-link"
              onClick={() => {
                scrollToSection("home");
                setIsMobileMenuOpen(false);
              }}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>
            <motion.button
              className="navbar-link"
              onClick={() => {
                scrollToSection("motive");
                setIsMobileMenuOpen(false);
              }}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Motive
            </motion.button>
            <motion.button
              className="navbar-link"
              onClick={() => {
                scrollToSection("values");
                setIsMobileMenuOpen(false);
              }}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Values
            </motion.button>
            <motion.button
              className="navbar-link"
              onClick={() => {
                scrollToSection("team");
                setIsMobileMenuOpen(false);
              }}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Team
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Header Section */}
      <motion.header
        className="header"
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="header-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="team-name" variants={fadeInUp}>
            <motion.span
              className="refine-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              REFINE
            </motion.span>
            <motion.span
              className="dash"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              -
            </motion.span>
            <motion.span
              className="scifi-x"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
            >
              X
            </motion.span>
          </motion.h1>
          <motion.p
            className="team-subtitle"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            TEAM 3
          </motion.p>
        </motion.div>
        <div className="header-decoration"></div>
      </motion.header>

      {/* Motive Section */}
      <motion.section
        className="motive-section"
        id="motive"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container">
          <motion.h2 className="section-title" variants={slideInLeft}>
            Our Motive
          </motion.h2>
          <motion.p className="motive-text" variants={slideInRight}>
            Empowering transformation through innovation, refinement, and
            relentless pursuit of excellence. We believe in reshaping the future
            by challenging the status quo and creating meaningful impact.
          </motion.p>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="values-section"
        id="values"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 className="section-title" variants={fadeInUp}>
            Our Values
          </motion.h2>
          <motion.div
            className="values-organic-grid"
            variants={staggerContainer}
          >
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                className={`value-organic-card value-${index + 1}`}
                variants={scaleIn}
                {...(isHoverDevice && {
                  whileHover: {
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }
                })}
                whileTap={{ scale: 0.95 }}
              >
                <motion.h3
                  className="value-organic-title"
                  style={{ color: value.color }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {value.title}.
                </motion.h3>
                <motion.p
                  className="value-organic-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="team-section"
        id="team"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 className="section-title" variants={fadeInUp}>
            Meet Our Team
          </motion.h2>
          <motion.div className="team-grid" variants={staggerContainer}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                variants={scaleIn}
                {...(isHoverDevice && {
                  whileHover: {
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }
                })}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="team-image-container"
                  {...(isHoverDevice && {
                    whileHover: {
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }
                  })}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                    onError={(e) => {
                      // Create a placeholder with initials
                      const canvas = document.createElement("canvas");
                      canvas.width = 300;
                      canvas.height = 300;
                      const ctx = canvas.getContext("2d");

                      // Purple gradient background
                      const gradient = ctx.createLinearGradient(0, 0, 300, 300);
                      gradient.addColorStop(0, "#8B5CF6");
                      gradient.addColorStop(1, "#C084FC");
                      ctx.fillStyle = gradient;
                      ctx.fillRect(0, 0, 300, 300);

                      // White text with initials
                      ctx.fillStyle = "white";
                      ctx.font = "bold 80px Arial";
                      ctx.textAlign = "center";
                      ctx.textBaseline = "middle";
                      const initials = member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("");
                      ctx.fillText(initials, 150, 150);

                      e.target.src = canvas.toDataURL();
                    }}
                  />
                </motion.div>
                <motion.div
                  className="team-info"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.h3
                    className="team-member-name"
                    {...(isHoverDevice && {
                      whileHover: { color: "#C084FC" }
                    })}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="team-member-role"
                    initial={{ opacity: 0.7 }}
                    {...(isHoverDevice && {
                      whileHover: { opacity: 1 }
                    })}
                  >
                    {member.role}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container">
          <motion.div className="footer-content" variants={staggerContainer}>
            <motion.div
              className="footer-logo"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <span className="refine-text">REFINE</span>
              <span className="dash">-</span>
              <span className="scifi-x">X</span>
            </motion.div>
            <motion.p className="footer-subtitle" variants={fadeInUp}>
              Journey of Transformation
            </motion.p>
            <motion.div className="footer-social" variants={slideInUp}>
              <motion.a
                href="https://www.instagram.com/refinex_____?igsh=MXVkN2NibngzbWhzeQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 107, 157, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="instagram-icon"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  📷
                </motion.span>
                Follow us on Instagram
              </motion.a>
            </motion.div>
            <motion.p
              className="footer-copyright"
              variants={fadeInUp}
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
            >
              &copy; 2025 REFINE-X Team. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
