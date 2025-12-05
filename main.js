// main.js
const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");
const counterEl = document.querySelector("#counter");

const openMouthImg = "./images/GLE(OPEN).png";
const closeMouthImg = "./images/GLE(CLOSE).png";

const openMouthSound = new Audio("./sound/sound-open.mp3");
const closeMouthSound = new Audio("./sound/sound-close.mp3");

// load counter from localStorage
let count = 0;
try {
  const saved = localStorage.getItem("pop_count_v1");
  if (saved !== null) count = parseInt(saved, 10) || 0;
} catch (e) { count = 0; }
counterEl.textContent = count;

// click handler
btn.addEventListener("click", () => {
  count += 1;
  counterEl.textContent = count;
  try { localStorage.setItem("pop_count_v1", String(count)); } catch (e) {}
  
  openMouth();
  popcat.classList.add("pop-anim");
  
  const OPEN_TIME = 140;
  setTimeout(() => {
    closeMouth();
    popcat.classList.remove("pop-anim");
  }, OPEN_TIME);
});

// prevent pinch-zoom on multi-touch (optional extra safeguard)
window.addEventListener('touchstart', function (e) {
  if (e.touches && e.touches.length > 1) {
    e.preventDefault();
  }
}, { passive: false });

function openMouth() {
  popcat.src = openMouthImg;
  try { 
    openMouthSound.currentTime = 0;
    openMouthSound.play();
  } catch (e) {}
}

function closeMouth() {
  popcat.src = closeMouthImg;
  try {
    closeMouthSound.currentTime = 0;
    closeMouthSound.play();
  } catch (e) {}
}
