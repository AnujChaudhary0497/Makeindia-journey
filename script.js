const playVideo = document.querySelector("#playVideo");
const videoModal = document.querySelector("#videoModal");
const closeVideo = document.querySelector("#closeVideo");
const youtubeVideo = document.querySelector("#youtubeVideo");

if (playVideo && videoModal && closeVideo && youtubeVideo) {

    playVideo.addEventListener("click", () => {
        youtubeVideo.src =
            "https://www.youtube.com/embed/52t241OQ7Ec?autoplay=1";
        videoModal.classList.add("active");
    });

    closeVideo.addEventListener("click", () => {
        videoModal.classList.remove("active");
        youtubeVideo.src = "";
    });

}

const hero = document.querySelector(".hero");
const heroSubtitle = document.querySelector(".hero-subtitle");
const heroTitle = document.querySelector(".hero-content h1");
const heroDescription = document.querySelector(".hero-description");
const heroDots = document.querySelectorAll(".hero-dot");

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

function changeHero(index) {
  const slide = heroSlides[index];

  /* Change background image */

  hero.style.backgroundImage = `
        linear-gradient(
            rgba(0, 0, 0, 0.40),
            rgba(0, 0, 0, 0.40)
        ),
        url("${slide.image}")
    `;

  /* Change text */

  heroSubtitle.textContent = slide.subtitle;

  heroTitle.innerHTML = slide.title;

  heroDescription.textContent = slide.description;

  /* Change active dot */

  heroDots.forEach((dot) => {
    dot.classList.remove("active");
  });

  heroDots[index].classList.add("active");
}

/* Dot click */

heroDots.forEach((dot) => {
  dot.addEventListener("click", function () {
    const index = Number(this.dataset.slide);

    changeHero(index);
  });
});
