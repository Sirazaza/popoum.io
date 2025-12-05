const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");

const openMouthImg = "./images/GLE(CLOSE).png";
const closeMouthImg = "./images/GLE(OPEN).png";

const openMouthSound = new Audio("./sound/sound-open.mp3");
const closeMouthSound = new Audio("./sound/sound-close.mp3");

// CLICK = เปิดปากแป๊บเดียว แล้วปิดกลับ
btn.addEventListener("click", () => {
    openMouth();
    setTimeout(closeMouth, 120); // 120ms = เปิดแว๊บเดียว
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
