<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>R&S Business Design & Solutions</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

<!-- HEADER -->
<header class="header">
  <div class="logo-box">
    <!-- 🔽 LOGO IMAGE -->
    <img src="logo.jpg" alt="R&S Business Design & Solutions Logo">
  </div>

  <nav class="nav">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#industries">Industries</a>
    <a href="#contact">Contact</a>
  </nav>

  <div class="menu-btn" onclick="toggleMenu()">☰</div>
</header>

<!-- HERO -->
<section id="home" class="hero reveal"
  style="background-image: url('hero.jpg');">
  <div class="hero-overlay">
    <h1>Transform Your Business Future</h1>
    <p>
      R&S Business Design & Solutions delivers world-class consulting services
      to drive digital transformation and sustainable growth.
    </p>
    <button onclick="scrollToSection('contact')">Get in Touch</button>
  </div>
</section>

<!-- ABOUT -->
<section id="about" class="section reveal about">
  <div class="about-content">
    <img src="about.jpg" alt="About RSBDS">
    <div>
      <h2>Who We Are</h2>
      <p>
        We are a professional consultancy firm delivering business strategy,
        design innovation, and digital transformation services for modern
        enterprises.
      </p>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section id="services" class="section gray reveal">
  <h2>Our Services</h2>

  <div class="cards">
    <div class="card">
      <img src="service1.jpg" alt="Business Consulting">
      <h3>Business Consulting</h3>
      <p>Strategic planning and operational excellence.</p>
    </div>

    <div class="card">
      <img src="service2.jpg" alt="Design Strategy">
      <h3>Design & Strategy</h3>
      <p>Brand identity, UX design, and innovation.</p>
    </div>

    <div class="card">
      <img src="service3.jpg" alt="Digital Transformation">
      <h3>Digital Transformation</h3>
      <p>Technology-driven scalable solutions.</p>
    </div>
  </div>
</section>

<!-- INDUSTRIES -->
<section id="industries" class="section reveal">
  <h2>Industry Expertise</h2>
  <div class="industry-grid">
    <span>Information Technology</span>
    <span>Manufacturing</span>
    <span>Healthcare</span>
    <span>Finance</span>
    <span>Startups & MSMEs</span>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="section gray reveal">
  <h2>Contact Us</h2>
  <form onsubmit="return validateForm()">
    <input type="text" id="name" placeholder="Your Name">
    <input type="email" id="email" placeholder="Your Email">
    <textarea id="message" placeholder="Your Message"></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>

<!-- FOOTER -->
<footer class="footer">
  <p>© 2026 R&S Business Design & Solutions</p>
</footer>

<script src="script.js"></script>
</body>
</html>
