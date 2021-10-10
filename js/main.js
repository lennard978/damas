import testmonials from './testmonials.js'
gsap.registerPlugin(ScrollTrigger)

//Full height check
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

/*
==========================
  GSAP ANIMATION
==========================  
*/

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

/*
==========================
  MODAL ANIMATION
==========================  
*/

var openModal = document.querySelectorAll('.openModal')
var closeModal = document.querySelectorAll('.closeModal')
var hiddenText = document.querySelector('.hidden-text')

openModal.forEach((element) => {
  element.addEventListener('click', function () {
    element.closest('.box').querySelector('.hidden-text').style.display = 'flex'
  })
})

closeModal.forEach((element) => {
  element.addEventListener('click', function () {
    element.closest('.box').querySelector('.hidden-text').style.display = 'none'
  })
})

/*
==========================
  TESTMONIALS
==========================  
*/

const testmonialsContent = document.querySelector('#testimonials')
const cardBox = document.querySelector('.card')
const rightBtn = document.querySelector('.rightBtn')
let index = 0

const changePerson = () => {
  let currentItem = testmonials[index]
  const content = `
  
    <div class="card-body">

      <div class="card-image">
        <img src="${currentItem.image}" alt="Valentin" />
      </div>

      <div class="card-text">
        <q>${currentItem.text}</q>
        <h5>${currentItem.name}</h5>
        <p>${currentItem.position}</p>
      </div>

    </div>

    
`
  cardBox.innerHTML = content
  testmonialsContent.appendChild(cardBox)
}

rightBtn.addEventListener('click', function () {
  cardBox.style.display = 'flex'
  changePerson()
  gsap.from(cardBox, { opacity: 0, x: innerWidth * 1 })
  if (testmonials.length - 1 === index) {
    index = 0
  } else {
    index++
  }
})
