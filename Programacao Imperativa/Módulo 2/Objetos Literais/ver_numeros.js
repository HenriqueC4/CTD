// 1
numerosPrimos = [2, 3, 5, 7, 11, 13];
numeros = [6, 9, 12, 15, 17];

let verNumeros = [...numerosPrimos, ...numeros];

console.log(verNumeros);

// 2.

function maiorNumero(...params)
{

    return console.log(Math.min(...params));
}

maiorNumero(2, 5, 7, 9);