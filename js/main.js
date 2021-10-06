import {Romanian, English} from "./header.js";
/*
  Change Language
*/
const roman = document.querySelector(".rom");
const eng = document.querySelector(".eng");

const main = `
  <h1>${English.title}</h1>
  <h2>-Vlady Damas Group-</h2>
  `;

const changeLanguage = (Language) => {
  const content = `
  <h1>${Language.title}</h1>
  <h2>-Vlady Damas Group-</h2>
  `;
  return content;
};

const title = document.querySelector("header .main-text");
const h1 = document.createElement("h1");
title.appendChild(h1);

roman.addEventListener("click", function(){
  h1.innerHTML = changeLanguage(Romanian);
});
eng.addEventListener("click", function(){
  h1.innerHTML = changeLanguage(English);
});



