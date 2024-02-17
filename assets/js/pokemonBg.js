// Create function with set interval so the images will randomly change

let bgImg = [
  "./resources/images/pokeball.jpg",
  "./resources/images/pokemon-group.jpg",
  "./resources/images/evil-pokemon.jpg",
  "./resources/images/fighting-scene.png",
  "./resources/images/fighting-scene2.jpg",
  "./resources/images/pokemon-bg.jpg",
  "./resources/images/pokemon-bg1.jpg",
  "./resources/images/pokemon-bg2.jpg",
  "./resources/images/pokemon-bg3.jpg",
  "./resources/images/pokemon-4.jpg",
];

const backgroundImg = document.querySelector(".bg-image"); // Access the DOM body element

// Preload images to stop white flashing effect of re-rendering between browsers
const imageObjects = bgImg.map((src) => {
  const img = new Image();
  img.src = src;
  return img;
});

function showChangeImg() {
  const bgImgRandoIndex = Math.floor(Math.random() * bgImg.length); // random images choosen
  //   Access the random pokemon images by index
  const randoImage = bgImg[bgImgRandoIndex];
  // Create a linear gradient overlay
  const gradientOverlay =
    "linear-gradient(55deg, rgba(13, 10, 10, 0.736) 0%, rgba(15, 14, 14, 0.329) 100%)";
  //   setting the random background images
  backgroundImg.style.backgroundImage = `${gradientOverlay}, url(' ${randoImage}')`;
}
setInterval(showChangeImg, 2500); // time delay for each images
