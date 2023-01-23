// passando o caminho de um arquivo com a função require
const dados = require("./cliente.json");

console.log(dados)
console.log(dados.telefone);
console.log(typeof dados);

// transformando o objeto em string
const clienteEmString = JSON.stringify(dados)

console.log(clienteEmString)
console.log(typeof clienteEmString)

// transformando o arquivo em string para objeto novamente
const clienteEmObjeto = JSON.parse(clienteEmString)
console.log(clienteEmObjeto)