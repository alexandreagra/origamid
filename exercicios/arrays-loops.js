// for (var numero = 1; numero <= 10; numero++) {
//     console.log(numero)
// }

// var i = 0
// while (i <= 100) {
//     console.log(i)
//     i = i + 5
// }

// const videoGames = ['Switch', 'PS4', 'XBOX', '3DS', 'PS2']

// // for(let item = 0; videoGames.length; item++) {
// //     console.log(videoGames[item])
// //     if (videoGames[item] === 'PS4') {
// //         break
// //     }
// // }

// videoGames.forEach(function(game, index) {
//     console.log(index, game)
// })

//------------------------Exercício:

// const brasilVencedor = ['1959', '1962', '1970', '1994', '2002']


// brasilVencedor.forEach(function(ano, index) {
//     console.log("O brasil ganhou a copa de", ano)
// })

        // const brasilVencedor = ['1959', '1962', '1970', '1994', '2002'] 

        // for(let i = 0; i < brasilVencedor.lenght; i++) {
        //     console.log("O brasil ganhou a copa de: " + brasilVencedor[i])
        // }

        
const frutas = ['Banana', 'macã', 'Pera', 'Uva', 'Melancia']

// for(let i = 0; i < frutas.length; i++) {
//     if (frutas.length <= [2]) {
//         break
//     }
//     console.log(frutas.pop())
// }
        for (var fruta = 0; fruta < frutas.lenght; fruta++) {
            console.log(frutas[fruta])
            if(frutas[fruta] = 'Pera') {
                break
            }
        }

        let ultimaFruta = frutas[frutas.length - 1] //forma correta de puxar o último item de um array
        console.log(ultimaFruta)
