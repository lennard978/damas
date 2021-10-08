let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".why",
      start: "top center",
      end: "2% 2%",
      // markers: true,
      scrub: true,
      // pin: true,
    },
  })
  .from(".top", { opacity: 0 })
  .from(".top h3", { x: innerWidth * 1, opacity: 0 })
  .from(".top p", { x: innerWidth * -1, opacity: 0 })
  .from(".top li", { y: innerHeight * 1, opacity: 0, rotate: 360 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".bottom",
      start: "30% center",
      end: "2% 2%",
      // markers: true,
      scrub: true,
      // pin: true,
    },
  })
  .from(".bottom", { opacity: 0 })
  .from(".bottom h3", { x: innerWidth * 1, opacity: 0 })
  .from(".bottom p:nth-child(2)", { x: innerWidth * -1, opacity: 0 })
  .from(".bottom p:nth-child(3)", { x: innerWidth * 1, opacity: 0 })
  .from(".bottom p:nth-child(4)", { y: innerHeight * -1, opacity: 0 })
  .from(".bottom p:nth-child(5)", { y: innerHeight * 1, opacity: 0 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".banner",
      start: "30% center",
      end: "2% top",
      // markers: true,
      scrub: true,
      // pin: true,
    },
  })
  .from(".banner article:nth-child(1)", { opacity: 0, x: innerWidth * -1 })
  .from(".banner article:nth-child(2)", { opacity: 0, x: innerWidth * 1 })
  .from(".banner article:nth-child(3)", { opacity: 0, x: innerWidth * -1 });

var readMore = document.querySelectorAll(".read-more");
var readLess = document.querySelectorAll(".read-less");
var hiddenText = document.querySelectorAll(".hidden-text");
var dots = document.querySelectorAll("#dots");

readMore.forEach((items) => {
  items.addEventListener("click", function () {
    if (items.closest(".box").querySelector("#dots").style.display === "none") {
      items
        .closest(".box")
        .querySelector(".hidden-text")
        .classList.remove("show");
      items.closest(".box").querySelector("#dots").style.display = "inline";
      items.innerHTML = "Read More";
    } else {
      items.closest(".box").querySelector(".hidden-text").classList.add("show");
      items.closest(".box").querySelector("#dots").style.display = "none";
      items.innerHTML = "Read Less";
    }
  });
});

// readLess.forEach((items) => {
//   items.addEventListener('click', function () {
//     items.closest('.box').querySelector('.hidden-text').classList.remove('show')
//     items.style.display = 'none'
//   })
// })
