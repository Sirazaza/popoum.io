// References to DOM elements
const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");

// The two images of the POP CAT
const openMouthImg = "./images/1f106e7d-2e6a-4563-8ba6-183225d2b80f.png";
const closeMouthImg = "./images/1f106e7d-2e6a-4563-8ba6-183225d2b80f.jpg";

// The two Popping sounds
const openMouthSound = new Audio("./sound/sound-open.mp3");
const closeMouthSound = new Audio("./sound/sound-close.mp3");

// Event Handlers (Desktops)
btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

// Event Handers (Touch Screens)
btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
})

btn.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
})

// The functions which will perform the cool stuff
function openMouth() {
    popcat.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    popcat.src = closeMouthImg;
    closeMouthSound.play();
}
