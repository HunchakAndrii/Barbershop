"use struct";


const mainBlock = document.getElementsByClassName("header__main-block")[0];
const prevBtn = document.getElementsByClassName("prev")[0];
const nextBtn = document.getElementsByClassName("next")[0];

const backgrounds = [
  'url("/img/main-background-img-1.png")',
  'url("/img/imgonline-com-ua-Resize-4ucCIfnzLR.png")',
  'url("/img/imgonline-com-ua-Resize-ECO5RTQI7YGuq.png")',
];

let currentIndex = 0;
let intervalId;

updateBackground();

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
  updateBackground();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % backgrounds.length;
  updateBackground();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % backgrounds.length;
  updateBackground();
}, 5000);

function updateBackground() {
  if (window.innerWidth <= 650) {
    clearInterval(intervalId); 
    return; 
  }

  mainBlock.style.backgroundImage = backgrounds[currentIndex];
  setTimeout(() => {
    mainBlock.style.backgroundImage = backgrounds[currentIndex];
    mainBlock.classList.remove("fade-out");
  }, 500);
}


// burger 

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".dark-background");

if (burger) {
  burger.addEventListener("click", (e) => {
    e.preventDefault();

    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    if (document.body.classList.contains("body-overlay")) {
      document.body.classList.toggle("body-overlay");
    } else {
      document.body.classList.add("body-overlay");
    }
  });
}