const menu = document.querySelector('.menu')

menu.classList.add('ativo')
menu.classList.remove('azul')
menu.classList.toggle('azul') //Toggle adiciona ou remove um elemento
menu.classList.toggle('azul') //Como o toggle incluiu um elemento que não existia, agora ele adiciona de novo e assim sucessivamente.
menu.classList.toggle('azul')
if(menu.classList.contains('azul')) {
    menu.classList.add('possui-azul')
} else {
    menu.classList.add('nao-possui-azul')
}

menu.className = 'ativado' + ' vermelho' //ou += ' vermelho' 
//É possível mudar o nome das classes, sendo mais de uma, dando um espaço na segunda.

console.log(menu.className)

const animais = document.querySelector('.animais')

console.log(animais.attributes['data-texto']) //É arraylike e também pode usar pesquisas intuitivas, ex: ".class" ou ".id", pra saber se tem classe ou id nos atributos. NÃO PODE RECEBER VARIÁVEIS COM HÍFEM, a menos que você escreva como string, entre colchetes.

const imagem = document.querySelector('img')

imagem.getAttribute('alt')
imagem.setAttribute('alt', 'RaposaFeroz')
console.log(imagem)
imagem.removeAttribute('alt')

const carro = {
    portas: 4, 
    andar: function(km) {
        console.log(`Andou ${km}`)
    }
}



