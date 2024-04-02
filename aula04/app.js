// Criar e remover pastas
const fs = require('fs');

fs.appendFile('logs.log','Logado\n', (erro)=>{
    console.log(erro);
});

// Apagar arquivo
if (fs.existsSync('logs.log')){
    fs.rmSync('logs.log')
}
console.log('Fim da execução');