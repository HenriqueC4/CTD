let compras = ["arroz", "feijao", "batata", "frango", "leite"]

//Realiza o método de array .join
let join = compras.join(" - ");
console.log("O método .join organiza os valores da array de acordo com o caractere que deseja.");
console.log(join);

//Realiza o método de array .pop
compras.pop();
console.log("O método .pop remove o último elemento da array e retorna o mesmo.");
console.log(compras);

//Realiza o método de array .push
compras.push("Salgadinho", "Nuggets");
console.log("O método .push adiciona um ou mais elementos à array.");
console.log(compras);

//Realiza o método de array .shift
compras.shift();
console.log("O método .shift remove o primeiro elemento da array e retorna o mesmo");
console.log(compras);

//Realiza o método de array .unshift
compras.unshift("Ovos", "Suco");
console.log("O método .unshift adiciona um ou mais elementos ao começo da array.");
console.log(compras);