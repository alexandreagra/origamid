//Adicione a classe ativo a todos os items do menu

const adicionandoClasses = document.querySelectorAll('.menu a');
adicionandoClasses.forEach((item) => {
    item.classList.add('ativo')
})

//Remove a classe ativo de todos os itens do menu e mentenha apenas no primeiro
adicionandoClasses.forEach((item) => {
    item.classList.remove('ativo')
})

adicionandoClasses[0].classList.add('ativo')


//Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img')
imagens.forEach((item) =>{
    if (item.hasAttribute('alt') === true) {
        console.log('tem atributo sim!')
    } else {
        console.log('tem não!')
    }
    console.log(item)
})

//Modifique o href do link externo do menu
//https://www.youtube.com

const linkExterno = document.querySelector('a[href^="http"]')

linkExterno.setAttribute('href', 'https://www.youtube.com')

console.log(linkExterno)

