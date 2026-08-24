const playVideo = document.querySelector("#playVideo");
const videoModal = document.querySelector("#videoModal");
const closeVideo = document.querySelector("#closeVideo");
const youtubeVideo = document.querySelector("#youtubeVideo");

playVideo.addEventListener("click", () => {
  youtubeVideo.src =
    "https://www.youtube.com/embed/52t241OQ7Ec?autoplay=1&origin=http://127.0.0.1:5500";

  videoModal.classList.add("active");
});

closeVideo.addEventListener("click", () => {
  videoModal.classList.remove("active");

  youtubeVideo.src = "";
});
