// Criar e remover pastas
const fs = require('fs');

/*// Com método síncrono
fs.mkdirSync('logs');*/

// Com método assíncrono - se é um método assíncronno, ele exige callback (pro erro)
fs.mkdir('logs2',(erro)=>{
    if (erro) {
        console.log(erro);
    }
});


// Para remover pastas
// 1º testamos a existência da pasta
if (fs.existsSync('logs2')) {
    fs.rmdirSync('logs2');
}
console.log('Fim da execução.');

fs.mkdir('logs3',(erro)=>{
    if (erro) {
        console.log(erro);
    }
});