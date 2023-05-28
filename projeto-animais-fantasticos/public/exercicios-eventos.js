// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// const linksInternos = document.querySelectorAll('a[href^="#"]')

// function addAtivo(event) {
//     event.preventDefault()
//     linksInternos.forEach((link) => {
//         link.classList.remove('ativo')
//     })
//     this.classList.add('ativo')
// }

// linksInternos.forEach((item) => {
//     item.addEventListener('click', addAtivo)
// })

// // Selecione todos os elementos do site começando a partir do body,
// // ao clique mostre exatamente quais elementos estão sendo clicados

// const todosElementos = document.querySelectorAll(' body *') //o asterísco retorna TODOS os elementos do site, assim como no CSS. O "body" colocado antes é justamente especificando que todos os itens do body serão selecionados.

// function handleElemento(event) {
//     console.log(event.currentTarget)
//     //event.currentTarget.remove()
// }

// todosElementos.forEach((elemento) => {
//     elemento.addEventListener('click', handleElemento)
// })

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

const textoUpper = document.querySelector('*')

function aumentarTexto(event) {
   if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior')
   }
}

window.addEventListener('keydown', aumentarTexto)
