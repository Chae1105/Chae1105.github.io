const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpg", "5.jpg", "6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
const img = document.querySelector("img");
img.classList.add("size");