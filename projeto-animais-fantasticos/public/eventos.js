const img = document.querySelector('img')

// function callback() {
//     console.log('clicou')
// }

function callback(event) {
    console.log(event)
}

img.addEventListener('click', callback) //Exemplo de como passar função como argumento e não ativá-la

// img.forEach((item) => {
//     return item.addEventListener('click', () => {
//         console.log('clicou!')
//     })
// })

const animaisLista = document.querySelector('.animais-lista')

function callbackLista(event) {
    console.log(event.currentTarget)
    console.log(event.target)
    console.log(event.type)
}

animaisLista.addEventListener('click', callbackLista)

console.log(animaisLista)

const linkExterno = document.querySelector("a[href^='http']")

function handleLinkExterno(event) {
    event.preventDefault() //previne que aconteçam eventos de forma padrão (o link da origamid não vai abrir, apenas será executado o método pre-definido no JS)
    // console.log('clicou!!!')
    console.log(this.getAttribute('href'))
    console.log(event.currentTarget)
}

linkExterno.addEventListener('click', handleLinkExterno)

const h1 = document.querySelector('h1')

function handleEvent(event) {
    console.log(event.type, event)
}

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mousemove', handleEvent)

// window.addEventListener('scroll', handleEvent)
// window.addEventListener('resize', handleEvent)
// window.addEventListener('keydown', handleEvent)

function handleKeyboard(event) {
    if (event.key === 'a') {
        document.body.classList.toggle('azul') //O toggle adiciona e remove elementos.
    }
    console.log(event.key)
}

window.addEventListener('keydown', handleKeyboard)

const imgs = document.querySelectorAll('img')

function handleImg(event) {
    console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg)
})