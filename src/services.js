import './style.css';

document.querySelector('#app').innerHTML = `
  <!-- ============================= -->
  <!-- NAVBAR -->
  <!-- ============================= -->

  <header class="navbar">
    <a href="/index.html" class="nav-logo">
      <img src="/logo ovalo.png" alt="ORM Limo Logo">
    </a>

    <nav class="nav-links">
      <a href="/services.html">Services</a>
      <a href="/fleet.html">Fleet</a>
      <a href="/about.html">About</a>
      <a href="/contact.html">Contact</a>
    </nav>

    <a href="/contact.html" class="nav-btn">get a quote</a>
  </header>

  <!-- ============================= -->
  <!-- SERVICES GALLERY SECTION -->
  <!-- ============================= -->

  <section class="service-cards-section" id="services">
    <div class="services-header">
      <p>OUR SERVICES</p>
      <h2>Premium chauffeur service for every moment that matters.</h2>
    </div>

    <div class="services-gallery-wrapper">
      <button class="services-arrow services-arrow-left" id="servicesPrev">
        ‹
      </button>

      <div class="services-gallery" id="servicesGallery">

        <!-- SERVICE CARD 1 -->
        <article class="service-card">
          <img src="/2suvbackground.jpg" alt="Luxury airport transfer service in Miami">

          <div class="service-card-text">
            <p>Airport Transfers</p>
            <h3>MIA, FLL & Private Airports</h3>
            <span>
              Private airport transportation designed for smooth pickups, comfortable rides and punctual arrivals.
            </span>
          </div>
        </article>

        <!-- SERVICE CARD 2 -->
        <article class="service-card">
          <img src="/2suvbackground.jpg" alt="Point to point luxury transportation in Miami">

          <div class="service-card-text">
            <p>Point-to-Point</p>
            <h3>Private Direct Transfers</h3>
            <span>
              Seamless private transportation from one location to another, ideal for hotels, residences and business meetings.
            </span>
          </div>
        </article>

        <!-- SERVICE CARD 3 -->
        <article class="service-card">
          <img src="/2suvbackground.jpg" alt="Hourly chauffeur service in Miami">

          <div class="service-card-text">
            <p>Hourly Chauffeur</p>
            <h3>As-Directed Service</h3>
            <span>
              Reserve a professional chauffeur by the hour for multiple stops, meetings or a flexible schedule.
            </span>
          </div>
        </article>

        <!-- SERVICE CARD 4 -->
        <article class="service-card">
          <img src="/2suvbackground.jpg" alt="Corporate chauffeur service in South Florida">

          <div class="service-card-text">
            <p>Corporate Travel</p>
            <h3>Executive Transportation</h3>
            <span>
              Premium black car service for executives, business travelers, VIP guests and corporate clients.
            </span>
          </div>
        </article>

        <!-- SERVICE CARD 5 -->
        <article class="service-card">
          <img src="/2suvbackground.jpg" alt="Luxury Sprinter van service in Miami">

          <div class="service-card-text">
            <p>Sprinter Service</p>
            <h3>Group Transportation</h3>
            <span>
              Spacious and elegant transportation for groups, events, family trips and corporate travel.
            </span>
          </div>
        </article>

        <!-- SERVICE CARD 6 -->
        <article class="service-card">
          <img src="/2suvbackground.jpg" alt="Luxury transportation for private events in Miami">

          <div class="service-card-text">
            <p>Special Events</p>
            <h3>Private Occasions</h3>
            <span>
              Luxury transportation for weddings, graduations, celebrations, nights out and custom requests.
            </span>
          </div>
        </article>

      </div>

      <button class="services-arrow services-arrow-right" id="servicesNext">
        ›
      </button>
    </div>
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
        <a href="/contact.html" class="footer-hero-btn">Book Now</a>
      </div>
    </section>

    <section class="footer-main">
      <div class="footer-column footer-brand">
        <img src="/logo ovalo.png" alt="ORM Limo Logo">
        <p>The standard of luxury.</p>
      </div>

      <div class="footer-column">
        <h3>About Us</h3>
        <a href="/about.html">About</a>
        <a href="/contact.html">Contact</a>
      </div>

      <div class="footer-column">
        <h3>What We Do</h3>
        <a href="/services.html">Services</a>
        <a href="/fleet.html">Fleet</a>
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

/* ============================= */
/* NAVBAR SCROLL EFFECT */
/* ============================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ============================= */
/* SERVICES GALLERY ARROWS */
/* ============================= */

const servicesGallery = document.querySelector("#servicesGallery");
const servicesPrev = document.querySelector("#servicesPrev");
const servicesNext = document.querySelector("#servicesNext");

if (servicesGallery && servicesPrev && servicesNext) {
  servicesNext.addEventListener("click", () => {
    servicesGallery.scrollBy({
      left: servicesGallery.clientWidth,
      behavior: "smooth"
    });
  });

  servicesPrev.addEventListener("click", () => {
    servicesGallery.scrollBy({
      left: -servicesGallery.clientWidth,
      behavior: "smooth"
    });
  });
}