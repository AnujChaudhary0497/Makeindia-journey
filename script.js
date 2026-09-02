const playVideo = document.querySelector("#playVideo");
const videoModal = document.querySelector("#videoModal");
const closeVideo = document.querySelector("#closeVideo");
const youtubeVideo = document.querySelector("#youtubeVideo");

if (playVideo && videoModal && closeVideo && youtubeVideo) {
  playVideo.addEventListener("click", () => {
    youtubeVideo.src = "https://www.youtube.com/embed/52t241OQ7Ec?autoplay=1";
    videoModal.classList.add("active");
  });

  closeVideo.addEventListener("click", () => {
    videoModal.classList.remove("active");
    youtubeVideo.src = "";
  });
}

/* ================= HERO CAROUSEL ================= */

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
const heroSubtitle = document.querySelector(".hero-subtitle");
const heroTitle = document.querySelector(".hero-content h1");
const heroDescription = document.querySelector(".hero-description");
const heroDots = document.querySelectorAll(".hero-dot");

/* ================= SLIDES ================= */

const heroSlides = [
  {
    image: "assets/hero.png",

    subtitle: "THIS AUGUST LONG WEEKEND",

    title: `
            Escape the Ordinary!
            <span>Discover India</span>
        `,

    description:
      "Make the most of the August long weekend with handpicked holiday packages. Explore breathtaking destinations.",
  },

  {
    image: "assets/hero2.png",

    subtitle: "COME EXPLORE WITH US",

    title: `
            Explore the World
            <span>with Make India Journey</span>
        `,

    description:
      "Discover beautiful destinations, unforgettable experiences, and specially curated journeys across India.",
  },
];

/* ================= CHANGE SLIDE ================= */

function changeHero(index) {
  const slide = heroSlides[index];

  /* Change Background Image */

  hero.style.backgroundImage = `
    linear-gradient(
        rgba(0, 0, 0, 0.65),
        rgba(0, 0, 0, 0.65)
    ),
    url("${slide.image}")
`;

  /* Change Text */

  heroSubtitle.textContent = slide.subtitle;

  heroTitle.innerHTML = slide.title;

  heroDescription.textContent = slide.description;

  /* ================= ACTIVE DOT ================= */

  heroDots.forEach((dot) => {
    dot.classList.remove("active");
  });

  heroDots[index].classList.add("active");

  /* ================= TEXT ANIMATION ================= */

  heroContent.classList.remove("hero-animate");

  void heroContent.offsetWidth;

  heroContent.classList.add("hero-animate");
}

/* ================= DOT CLICK ================= */

heroDots.forEach((dot) => {
  dot.addEventListener("click", function () {
    const index = Number(this.dataset.slide);

    changeHero(index);
  });
});
// ================= MENU BUTTON =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  const menuIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("mobile-active");

    menuBtn.classList.toggle("menu-open", isOpen);

    if (isOpen) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-xmark");
    } else {
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
    }
  });

  // Outside click se menu close + icon wapas bars
  document.addEventListener("click", (event) => {
    if (
      navLinks.classList.contains("mobile-active") &&
      !navLinks.contains(event.target) &&
      !menuBtn.contains(event.target)
    ) {
      navLinks.classList.remove("mobile-active");
      menuBtn.classList.remove("menu-open");

      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
    }
  });
}

// ================= FAQ ACCORDION =================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Close other questions
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Open / close clicked question
    item.classList.toggle("active");
  });
});

// =========================
// BOOKING MODAL
// =========================

const openBooking = document.getElementById("openBooking");
const bookingModal = document.getElementById("bookingModal");
const closeBooking = document.getElementById("closeBooking");

if (openBooking && bookingModal && closeBooking) {
  openBooking.addEventListener("click", (event) => {
    event.preventDefault();

    bookingModal.classList.add("active");

    document.body.style.overflow = "hidden";
  });

  closeBooking.addEventListener("click", () => {
    bookingModal.classList.remove("active");

    document.body.style.overflow = "";
  });

  // Outside click se close
  bookingModal.addEventListener("click", (event) => {
    if (event.target === bookingModal) {
      bookingModal.classList.remove("active");

      document.body.style.overflow = "";
    }
  });

  // ESC se close
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && bookingModal.classList.contains("active")) {
      bookingModal.classList.remove("active");

      document.body.style.overflow = "";
    }
  });
}
