const animais = document.getElementById("animais");

const gridSection = document.getElementsByClassName("grid-section");

console.log(gridSection[1]);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linkInternos = document.querySelector('[href^="#"]'); // O acento circunflexo significa "Começa com..."
console.log(linkInternos);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[1]);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll("grid-section");

primeiraUl.classList.add("quid-section");

console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index){
    console.log(item)
})

const arrayGrid = Array.from(gridSectionHTML) 

arrayGrid.forEach(function(item){
    console.log(item)
})
