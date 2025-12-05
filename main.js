const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");

const openMouthImg = "./images/GLE(OPEN).png";
const closeMouthImg = "./images/GLE(CLOSE).png";

const openMouthSound = new Audio("./sound/sound-open.mp3");
const closeMouthSound = new Audio("./sound/sound-close.mp3");

btn.addEventListener("click", () => {
  openMouth();
  popcat.classList.add("pop-anim");

  setTimeout(() => {
    closeMouth();
    popcat.classList.remove("pop-anim");
  }, 140);
});

function openMouth() {
  popcat.src = openMouthImg;
  openMouthSound.currentTime = 0;
  openMouthSound.play();
}

function closeMouth() {
  popcat.src = closeMouthImg;
  closeMouthSound.currentTime = 0;
  closeMouthSound.play();
}
