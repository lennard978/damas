// import { Romanian, English, German } from "./header.js";
// /*
//   Change Language
// */
// const roman = document.querySelector(".rom");
// const eng = document.querySelector(".eng");
// const ger = document.querySelector(".ger");

// function createHeader(language) {
//   return `
//     <h1>${language.title}</h1>
//     <h2>-Vlady Damas Group-</h2>
//     `;
// }

// const title = document.querySelector("header .main-text");
// const h1 = document.createElement("h1");
// h1.innerHTML = createHeader(English);

// title.append(h1);

// roman.addEventListener("click", function () {
//   h1.innerHTML = createHeader(Romanian);
// });
// eng.addEventListener("click", function () {
//   h1.innerHTML = createHeader(English);
// });
// ger.addEventListener("click", function () {
//   h1.innerHTML = createHeader(German);
// });

let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#about',
  },
})

tl.from('.why', { x: -300, opacity: 0, duration: 2 })
