// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');

// // h1.innerHTML = "<p>Novo Título</p>";

// // console.log(h1.innerHTML)
// // console.log(h1.outerHTML)


// // console.log(animaisLista.innerHTML);

// const lista = document.querySelector('.animais-lista');

// console.log(lista.parentElement)
// console.log(lista.parentElement.parentElement)
// console.log(lista.parentElement.parentElement.parentElement)

// console.log(lista.nextElementSibling)
// console.log(lista.previousElementSibling)

// console.log(lista.children)
// console.log(lista.children.length -1) // O -1 RETORNA O ÚLTIMO ITEM DA LISTA
// console.log(lista.childElementCount)

// console.log(lista.previousSibling) // RETORNA NODE QUE, INCLUSIVE, PODE SER UM "ENTER" DANDO ESPAÇO!
// console.log(lista.previousElementSibling)

// lista.querySelectorAll('li')
// lista.querySelector('li:last-child') // É POSSÍVEL FAZER ESSE TIPO DE SELEÇÃO!

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato')
// const titulo = document.querySelector('.titulo')



// const mapa = document.querySelector('.mapa')



// const novoH1 = document.createElement('h1')
// novoH1.innerText = 'Novo título'
// novoH1.classList.add('titulo')

// mapa.appendChild(novoH1)

// console.log(novoH1)

// const h1 = document.querySelector('h1')
// const faq = document.querySelector('.faq')

// const cloneH1 = h1.cloneNode(true) //

// // faq.appendChild(h1) //Com esse formato, estaria apenas tirando o h1 de um lugar e colocando em outro.

// cloneH1.classlist.add('azul') //uma classlist em um clone, funcionará exatamente no clone.
// faq.appendChild(cloneH1) //Já nesse formato, eu consigo clonar um elemento e colocá-lo em outro lugar.

//EXERCÍCIOS

// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)
copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')
const proximoDd = primeiroDt.nextElementSibling()

console.log(proximoDd)


// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais
