console.log('nomes');

let dados = require('./dados');
/*console.log(pessoas);
console.log(pessoas[2]);

console.log(dados.frutas);
console.log(dados.nomes);*/

// Usando desestruturação
let {nomes, frutas, soma} = require('./dados');
console.log(nomes);
console.log(frutas);
console.log(soma(2,4));