const imgs = document.querySelectorAll("img");

// imgs.forEach(function(item, index, array) {
// //   console.log(item, index, array);
// });

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

titulosArray.forEach((items, index) => { //Se tiver apenas um item/argumento, não precisa dos parênteses, ex: "forEach(item =>{}"
    console.log(items, index)
})

let i = 0
imgs.forEach(item =>{
    return i++ //usa-se o return dentro do forEach
})

imgs.forEach((item) => console.log(i++)) //com um item apenas, não precisa das chaves.
