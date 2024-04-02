// Lendo arquivo usando fs
const fs = require('fs');

/*fs.readFile('./dados.csv', (erro, data)=>{
    if(erro){
        console.log(erro);
    } else {
        console.log(data.toString());
    }
})

// Testar o método assíncrono
console.log("Segunda operação");

*/



// Reescrevendo a função para torná-la síncrona
let dados = "";
if (fs.existsSync("dados.csv")) {
    dados = fs.readFileSync('dados.csv');
    console.log(dados.toString());
} else {
    console.log("Arquivo não encontrado.");
}
console.log("Segunda operação");
