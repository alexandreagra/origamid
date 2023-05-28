const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.scrollHeight
const animaisTop = listaAnimais.offsetTop
console.log(animaisTop)

const primeiroH2 = document.querySelector('h2')
const h2left = primeiroH2.offsetLeft

const rect = primeiroH2.getBoundingClientRect() //informações gerais do elemento em tamanhos.

console.log(rect)

if(rect.top < 0) {
    console.log('passou do elemento')
}

console.log(innerWidth,
    innerHeight,
    outerWidth,
    outerHeight,
    scrollY,
    scrollX)

const small = window.matchMedia('(max-width: 600px)')
if(small.matches) {
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
}
