import './style.css';

document.querySelector('#app').innerHTML = `
  <!-- ============================= -->
  <!-- NAVBAR -->
  <!-- ============================= -->

  <header class="navbar">
    <a href="#" class="nav-logo">
      <img src="/logo ovalo.png" alt="ORM Limo Logo">
    </a>

    <nav class="nav-links">
      <a href="/services.html">Services</a>
      <a href="/fleet.html">Fleet</a>
      <a href="/about.html">About</a>
      <a href="/contact.html">Contact</a>
    </nav>

    <a href="#quote" class="nav-btn">get a quote</a>
  </header>

  <!-- ============================= -->
  <!-- HERO SECTION -->
  <!-- ============================= -->

  <section class="hero">
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <h1>Your Chauffeur Awaits.</h1>

      <p></p>

      <div class="hero-actions">
        <a class="primary-button" href="#quote">Book Your Ride</a>

        <a class="secondary-button" href="#services">Explore Services</a>
      </div>
    </div>
  </section>

  <!-- ============================= -->
  <!-- SERVICES SECTION -->
  <!-- ============================= -->

<section class="service-cards-section home-services" id="services">    <div class="services-header">
      <p>ORM LIMO SERVICES</p>
      <h2>Luxury transportation for every occasion.</h2>
    </div>

    <div class="service-cards">
      <div class="service-card">
        <img src="/2suvbackground.jpg" alt="Luxury SUV">

        <div class="service-card-text">
          <p>Point - to - point </p>
          <h3>Airport Transfers</h3>
          <span>A seamless private transfer from one location to another, designed for comfort, punctuality, and a professional chauffeur experience. Perfect for airport transfers, hotel pickups, business meetings, and direct rides.</span>
        </div>
      </div>

      <div class="service-card">
        <img src="/2suvbackground.jpg" alt="Executive Sprinter">

        <div class="service-card-text">
          <p>Hourly chauffeur service </p>
          <h3>Corporate Travel</h3>
          <span>As-Directed Service

Reserve a dedicated chauffeur by the hour, designed for comfort, flexibility, and a professional experience. Perfect for multiple stops, meetings, and having your vehicle on standby when needed.</span>
        </div>
      </div>

      <div class="service-card">
        <img src="/2suvbackground.jpg" alt="Private Chauffeur">

        <div class="service-card-text">
          <p>Special request</p>
          <h3>Hourly Service</h3>
          <span>Custom transportation for special occasions, including private celebrations, weddings, graduations, and unique plans beyond everyday travel. Perfect when your trip needs extra coordination and attention to detail.</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================= -->
  <!-- STACK GALLERY -->
  <!-- ============================= -->

  <section class="stack-gallery">
    <article class="stack-card">
      <img src="/2suvbackground.jpg" alt="ORM Limo Escalade">

      <div class="stack-content">
        <h2>Luxury Airport Transfers</h2>
        <p>Private chauffeur service designed for comfort, privacy, and punctual arrivals.</p>
      </div>
    </article>

    <article class="stack-card">
      <img src="/2suvbackground.jpg" alt="ORM Limo Executive Travel">

      <div class="stack-content">
        <h2>Corporate Chauffeur Service</h2>
        <p>Professional black car service for business meetings, airport pickups, and VIP clients.</p>
      </div>
    </article>

    <article class="stack-card">
      <img src="/2suvbackground.jpg" alt="ORM Limo Sprinter Van">

      <div class="stack-content">
        <h2>Group Luxury Transportation</h2>
        <p>Spacious and elegant transportation for events, families, corporate groups, and private trips.</p>
      </div>
    </article>

    <div class="stack-spacer"></div>
  </section>

  <!-- ============================= -->
  <!-- FOOTER -->
  <!-- ============================= -->

  <footer class="site-footer">
    <section class="footer-hero">
      <div class="footer-overlay"></div>

      <div class="footer-hero-content">
        <h2>Ready to Experience the Difference?</h2>
        <p>Let ORM Limo take care of your transportation, so you can focus on what matters.</p>
        <a href="#quote" class="footer-hero-btn">Book Now</a>
      </div>
    </section>

    <section class="footer-main">
      <div class="footer-column footer-brand">
        <img src="/logo ovalo.png" alt="ORM Limo Logo">
        <p>The standard of luxury.</p>
      </div>

      <div class="footer-column">
        <h3>About Us</h3>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div class="footer-column">
        <h3>What We Do</h3>
        <a href="#services">Services</a>
        <a href="#fleet">Fleet</a>
      </div>

      <div class="footer-column">
        <h3>Contact</h3>
        <p><strong>Call Us:</strong> +1 (754)226-6664</p>
        <p><strong>Email:</strong> ormlimovip@gmail.com</p>
      </div>
    </section>

    <div class="footer-bottom">
      <p>Copyright © 2026 ORM Limo. All rights reserved.</p>
    </div>
  </footer>
`;

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});