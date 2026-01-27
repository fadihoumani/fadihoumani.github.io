const images = [
  "images/project1.jpg",
  "images/project2.jpg",
  "images/project3.jpg",
  "images/project4.jpg",
  "images/project5.jpg",
  "images/project6.jpg",
  "images/project7.jpg",
  "images/project8.jpg"
];

let currentIndex = 0;

const carousel = document.getElementById("graphicCarousel");
const img = carousel.querySelector("img");

carousel.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  img.src = images[currentIndex];
});
