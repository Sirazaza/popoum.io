// References to DOM elements
const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");

// The two images of the POP CAT
const openMouthImg = "./images/GLE(OPEN).png";
const closeMouthImg = "./images/GLE(CLOSE).png";

// The two popping sounds
const openMouthSound = new Audio("./sound/sound-open.mp3");
const closeMouthSound = new Audio("./sound/sound-close.mp3");

// Event Handlers (Desktop)
btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

// Event Handlers (Touch Screens)
btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
});

btn.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
});

// Switch to open mouth
function openMouth() {
    popcat.src = openMouthImg;
    openMouthSound.currentTime = 0;
    openMouthSound.play();
}

// Switch to close mouth
function closeMouth() {
    popcat.src = closeMouthImg;
    closeMouthSound.currentTime = 0;
    closeMouthSound.play();
}
