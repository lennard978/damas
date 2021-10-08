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

gsap.registerPlugin(ScrollTrigger)

// gsap.from('.why', {
//   x: -500,
//   duration: 1,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: '.why',
//     start: 'center center',
//     end: 'bottom top',
//     markers: true,
//     //events: onEnter onLeave onEnterBack onLeaveBack
//     toggleActions: 'restart complete reverse reset',
//     //options: play, pause, resume, reset, restart, complete, reverse, none
//   },
// })

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.why',
      start: 'top center',
      end: '2% 2%',
      // markers: true,
      scrub: true,
      // pin: true,
    },
  })
  .from('.top', { opacity: 0 })
  .from('.top h3', { x: innerWidth * 1, opacity: 0 })
  .from('.top p', { x: innerWidth * -1, opacity: 0 })
  .from('.top li', { y: innerHeight * 1, opacity: 0, rotate: 360 })

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.bottom',
      start: '30% center',
      end: '2% 2%',
      // markers: true,
      scrub: true,
      // pin: true,
    },
  })
  .from('.bottom', { opacity: 0 })
  .from('.bottom h3', { x: innerWidth * 1, opacity: 0 })
  .from('.bottom p:nth-child(2)', { x: innerWidth * -1, opacity: 0 })
  .from('.bottom p:nth-child(3)', { x: innerWidth * 1, opacity: 0 })
  .from('.bottom p:nth-child(4)', { y: innerHeight * -1, opacity: 0 })
  .from('.bottom p:nth-child(5)', { y: innerHeight * 1, opacity: 0 })

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.banner',
      start: '30% center',
      end: '2% top',
      // markers: true,
      scrub: true,
      // pin: true,
    },
  })
  .from('.banner article:nth-child(1)', { opacity: 0, x: innerWidth * -1 })
  .from('.banner article:nth-child(2)', { opacity: 0, x: innerWidth * 1 })
  .from('.banner article:nth-child(3)', { opacity: 0, x: innerWidth * -1 })
