// 1

let numeros = [2, 6, 8, 14, 16];

let impar = numeros.map(function(num)
    {
        return num + 1;
    });

console.log(impar);

// 2

let nomes = ['Carlos', 'Maria', 'Ednaldo', 'Maria', 'Fausto'];

let marias = nomes.filter(function(maria)
    {
        return maria == 'Maria'
    });

console.log(marias);

// 3

let numeros = [1, 3, 5, 7, 9, 12, 15];

let format = numeros.reduce(function(a, b)
    {
        return a+'-'+b;
    });

console.log(format);

// 4

let animais = ['Cachorro', 'Gato', 'Peixe', 'Macaco', 'Ovelha'];

let apresenta = animais.forEach(function(nome)
    {
        console.log('O nome do animal é '+nome);
    });

