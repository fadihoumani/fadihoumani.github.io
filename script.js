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

// Create the image element dynamically
const img = document.createElement("img");
img.src = images[currentIndex];   // start with the first image
img.alt = `Project ${currentIndex + 1}`;
img.style.cursor = "pointer";     // optional, to show it's clickable
carousel.prepend(img);            // add it inside the carousel before the info paragraph

// Click event to cycle images
carousel.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  img.src = images[currentIndex];
  img.alt = `Project ${currentIndex + 1}`;

   img.onload = () => {
    img.classList.remove("horizontal");
    if (img.naturalWidth > img.naturalHeight) {
      img.classList.add("horizontal");
    }
  };
});
});
