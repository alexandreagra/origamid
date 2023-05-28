// window.alert('Isso mesmo!')

const href = window.location.href

console.log(href)

if(href === 'http://127.0.0.1:5500/dom-para-iniciantes/o-que-e-o-dom/index.html') {
    console.log('É igual!')
}

const h1Selecionado = document.querySelector('h1')
h1Selecionado.classList.add('titulo-principal')

// function callBackH1() {
//     console.log('Clicou em:', h1Selecionado.innerText)
// }
// h1Selecionado.addEventListener('click', function() {
//     return callBackH1()
// })

//OU 

h1Selecionado.addEventListener('click', function() {
    console.log('Clicou em:', h1Selecionado.innerText)
})