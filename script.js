const images = [
  "images/project1.jpg",
  "images/project2.jpg",
  "images/project3.jpg"
];

let currentIndex = 0;

const carousel = document.getElementById("graphicCarousel");
const img = carousel.querySelector("img");

carousel.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  img.src = images[currentIndex];
});
