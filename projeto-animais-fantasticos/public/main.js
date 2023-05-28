// retorne no console todas as imagens do site
const todasAsimagens = document.getElementsByTagName('img')
console.log(todasAsimagens)
// retorne no console apenas as imagens que começaram com a palavra "imagem"
const ImagensComImg = document.querySelectorAll('img[src^="../img/imagem"]')
console.log(ImagensComImg)
//Selecione os links internos onde o href comece com "#"
const linkInternoComHashtag = document.querySelectorAll('[href^="#"]')
console.log(linkInternoComHashtag)
//Selecione o primeiro h2 dentro de .animais-descricao
const apenasH2 = document.querySelectorAll('.animais-descricao h2')
console.log(apenasH2[0])
// Selecione o ultimo p do site
const ultimoP = document.querySelectorAll('p')
console.log(ultimoP[ultimoP.length - 1])
