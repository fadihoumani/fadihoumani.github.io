const images = [
  "images/project1.jpg",
  "images/project2.jpg",
  "images/project3.jpg",
  "images/project4.jpg",
  "images/project5.jpg",
  "images/project6.jpg",
  "images/project7.jpg",
  "images/project8.jpg",
  "images/project9.jpg",
  "images/project10.jpg",
  "images/project11.jpg",
  "images/project12.jpg",
  "images/project13.jpg",
  "images/project14.jpg",
  "images/project15.jpg"
];

let currentIndex = 0;

const carousel = document.getElementById("graphicCarousel");

// create image
const img = document.createElement("img");
img.src = images[currentIndex];
img.alt = `Project ${currentIndex + 1}`;
img.style.cursor = "pointer";
carousel.prepend(img);

// orientation check
function updateOrientation() {
  img.classList.remove("horizontal");
  if (img.naturalWidth > img.naturalHeight) {
    img.classList.add("horizontal");
  }
}

// run once for first image
img.onload = updateOrientation;

// click to change image
img.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  img.src = images[currentIndex];
  img.alt = `Project ${currentIndex + 1}`;
  img.onload = updateOrientation;
});
