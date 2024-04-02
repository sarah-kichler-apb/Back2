let nomes = ['Admilson', 'Benevides', 'Clementina'];
let frutas = ['Abacaxi', 'Banana', 'Cereja'];

function soma(a, b){
    return a + b;
}



// Exportação explícita do array
//module.exports = nomes;
//module.exports = frutas;
module.exports={
    nomes,
    frutas,
    soma
}

