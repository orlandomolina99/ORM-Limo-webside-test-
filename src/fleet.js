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
  <!-- FLEET HERO -->
  <!-- ============================= -->

  <main class="fleet-page">
    <section class="fleet-hero">
      <p>ORM LIMO FLEET</p>
      <h1>Discover our service classes.</h1>
      <span>
        Choose the right vehicle for your airport transfer, corporate travel, private event or luxury experience.
      </span>
    </section>

    <!-- ============================= -->
    <!-- SEDANS CATEGORY -->
    <!-- ============================= -->

    <section class="fleet-category">
      <div class="fleet-category-header">
        <p>Category 01</p>
        <h2>Sedans</h2>
        <span>
          Elegant and comfortable private transportation for solo travelers, couples and executive transfers.
        </span>
      </div>

      <div class="fleet-cards">

        <!-- SEDAN -->
        <article class="fleet-card">
          <div class="fleet-image-gallery">
            <img src="/sedan-exterior.png" alt="Sedan exterior">
            <img src="/sedan-interior.png" alt="Sedan interior">
            <img src="/sedan-luggage.png" alt="Sedan luggage space">
          </div>

          <div class="fleet-card-content">
            <h3>Sedan</h3>
            <p>Comfortable private transportation for airport transfers, business travel and direct rides.</p>

            <ul>
              <li>Up to 3 passengers</li>
              <li>Up to 3 bags</li>
              <li>Ideal for airport transfers and private rides</li>
            </ul>
            <a href="/contact.html" class="fleet-book-btn">
  Reserve This Vehicle
</a>
          </div>
        </article>

        <!-- LUXURY SEDAN -->
        <article class="fleet-card">
          <div class="fleet-image-gallery">
            <img src="/luxury-sedan-exterior.png" alt="Luxury sedan exterior">
            <img src="/luxury-sedan-interior.png" alt="Luxury sedan interior">
            <img src="/luxury-sedan-luggage.png" alt="Luxury sedan luggage space">
          </div>

          <div class="fleet-card-content">
            <h3>Luxury Sedan</h3>
            <p>Premium sedan service for executives, VIP guests and luxury private transfers.</p>

            <ul>
              <li>Up to 3 passengers</li>
              <li>Up to 3 bags</li>
              <li>Ideal for executives and VIP travel</li>
            </ul>
            <a href="/contact.html" class="fleet-book-btn">
  Reserve This Vehicle
</a>
          </div>
        </article>

      </div>
    </section>

    <!-- ============================= -->
    <!-- SUVS CATEGORY -->
    <!-- ============================= -->

    <section class="fleet-category">
      <div class="fleet-category-header">
        <p>Category 02</p>
        <h2>SUVs</h2>
        <span>
          Spacious black car service for airport transfers, families, executives and VIP clients.
        </span>
      </div>

      <div class="fleet-cards">

        <!-- SUV -->
        <article class="fleet-card">
          <div class="fleet-image-gallery">
            <img src="/suv-exterior.png" alt="SUV exterior">
            <img src="/suv-interior.png" alt="SUV interior">
            <img src="/suv-luggage.png" alt="SUV luggage space">
          </div>

          <div class="fleet-card-content">
            <h3>SUV</h3>
            <p>Spacious and comfortable SUV transportation for families, travelers and business clients.</p>

            <ul>
              <li>Up to 5 passengers</li>
              <li>Up to 6 bags</li>
              <li>Ideal for airport transfers and families</li>
            </ul>
            <a href="/contact.html" class="fleet-book-btn">
  Reserve This Vehicle
</a>
          </div>
        </article>

        <!-- LUXURY SUV -->
        <article class="fleet-card">
          <div class="fleet-image-gallery">
            <img src="/luxury-suv-exterior.png" alt="Luxury SUV exterior">
            <img src="/luxury-suv-interior.png" alt="Luxury SUV interior">
            <img src="/luxury-suv-luggage.png" alt="Luxury SUV luggage space">
          </div>

          <div class="fleet-card-content">
            <h3>Luxury SUV</h3>
            <p>Premium SUV service for executives, VIP clients, airport transfers and luxury travel.</p>

            <ul>
              <li>Up to 5 passengers</li>
              <li>Up to 6 bags</li>
              <li>Ideal for VIP clients and executives</li>
            </ul>
            <a href="/contact.html" class="fleet-book-btn">
  Reserve This Vehicle
</a>
          </div>
        </article>

      </div>
    </section>

    <!-- ============================= -->
    <!-- SPRINTER CATEGORY -->
    <!-- ============================= -->

    <section class="fleet-category">
      <div class="fleet-category-header">
        <p>Category 03</p>
        <h2>Sprinter Vans</h2>
        <span>
          Premium group transportation for corporate travel, private events, luxury experiences and special occasions.
        </span>
      </div>

      <div class="fleet-cards">

        <!-- PASSENGER SPRINTER -->
        <article class="fleet-card">
          <div class="fleet-image-gallery">
            <img src="/passenger-sprinter-exterior.jpg" alt="Passenger Sprinter exterior">
            <img src="/passenger-sprinter-interior.jpg" alt="Passenger Sprinter interior">
          </div>

          <div class="fleet-card-content">
            <h3>Passenger Sprinter</h3>
            <p>Comfortable group transportation for airport transfers, events and private group travel.</p>

            <ul>
              <li>Up to 13 passengers</li>
              <li>Up to 12 bags</li>
              <li>Ideal for group transfers and events</li>
            </ul>
            <a href="/contact.html" class="fleet-book-btn">
  Reserve This Vehicle
</a>
          </div>
        </article>

        <!-- EXECUTIVE SPRINTER -->
        <article class="fleet-card">
          <div class="fleet-image-gallery">
            <img src="/executive-sprinter-exterior.jpg" alt="Executive Sprinter exterior">
            <img src="/executive-sprinter-interior.jpg" alt="Executive Sprinter interior">
          </div>

          <div class="fleet-card-content">
            <h3>Executive Sprinter</h3>
            <p>Premium Sprinter service for corporate groups, executives and business travel.</p>
</a>
            <ul>
              <li>Up to 12 passengers</li>
              <li>Up to 12 bags</li>
              <li>Ideal for corporate groups</li>
            </ul>
            <a href="/contact.html" class="fleet-book-btn">
  Reserve This Vehicle
</a>
          </div>
        </article>

        <!-- SPRINTER LIMO -->
        <article class="fleet-card">
          <div class="fleet-image-gallery">
            <img src="/sprinter-limo-exterior.jpg" alt="Sprinter Limo exterior">
            <img src="/sprinter-limo-interior.jpg" alt="Sprinter Limo interior">
          </div>

          <div class="fleet-card-content">
            <h3>Sprinter Limo</h3>
            <p>Luxury group transportation for parties, weddings, nights out and special celebrations.</p>

            <ul>
              <li>Up to 12 passengers</li>
              <li>Up to 6 bags</li>
              <li>Ideal for events and celebrations</li>
              <a href="/contact.html" class="fleet-book-btn">
  Reserve This Vehicle
</a>
            </ul>
          </div>
        </article>

        <!-- JET SPRINTER -->
        <article class="fleet-card">
          <div class="fleet-image-gallery">
            <img src="/jet-sprinter-exterior.jpg" alt="Jet Sprinter exterior">
            <img src="/jet-sprinter-interior.jpg" alt="Jet Sprinter interior">
          </div>

          <div class="fleet-card-content">
            <h3>Jet Sprinter</h3>
            <p>Ultra premium Sprinter experience for VIP travel, private aviation and luxury clients.</p>

            <ul>
              <li>Up to 8 passengers</li>
              <li>Up to 10 bags</li>
              <li>Ideal for ultra VIP travel</li>
            </ul>
            <a href="/contact.html" class="fleet-book-btn">
  Reserve This Vehicle
</a>
          </div>
        </article>

      </div>
    </section>
  </main>

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
/* FLEET CARD IMAGE ARROWS */
/* ============================= */

const fleetGalleries = document.querySelectorAll(".fleet-image-gallery");

fleetGalleries.forEach((gallery) => {
  const wrapper = document.createElement("div");
  wrapper.className = "fleet-image-wrapper";

  gallery.parentNode.insertBefore(wrapper, gallery);
  wrapper.appendChild(gallery);

  const prevButton = document.createElement("button");
  const nextButton = document.createElement("button");

  prevButton.className = "fleet-gallery-arrow fleet-gallery-arrow-left";
  nextButton.className = "fleet-gallery-arrow fleet-gallery-arrow-right";

  prevButton.innerHTML = "‹";
  nextButton.innerHTML = "›";

  wrapper.appendChild(prevButton);
  wrapper.appendChild(nextButton);

  function updateArrows() {
    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
    const currentScroll = gallery.scrollLeft;

    if (currentScroll <= 5) {
      prevButton.classList.add("hidden");
    } else {
      prevButton.classList.remove("hidden");
    }

    if (currentScroll >= maxScrollLeft - 5) {
      nextButton.classList.add("hidden");
    } else {
      nextButton.classList.remove("hidden");
    }
  }

  nextButton.addEventListener("click", () => {
    gallery.scrollBy({
      left: gallery.clientWidth,
      behavior: "smooth"
    });

    setTimeout(updateArrows, 400);
  });

  prevButton.addEventListener("click", () => {
    gallery.scrollBy({
      left: -gallery.clientWidth,
      behavior: "smooth"
    });

    setTimeout(updateArrows, 400);
  });

  gallery.addEventListener("scroll", updateArrows);
  window.addEventListener("resize", updateArrows);

  updateArrows();
});