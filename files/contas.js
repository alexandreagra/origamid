
    let abril = [
        28.01,
        35.09,
        43.57
     ]
    let conta = abril.reduce((anterior, atual) => anterior + atual, 0).toFixed(2)

console.log(conta)