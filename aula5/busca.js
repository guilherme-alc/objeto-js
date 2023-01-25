// fazendo uma busca de um cliente na lista de clientes JSON, através do método de lista find() - que retorna a primeira ocorrência da condição - e verificando se nessa ocorrência tem o valor informado pelo método includes()

const clientes = require("./clientes.json")

function busca (lista, chave, valor) {
   return lista.find( (item) => item[chave].includes(valor))
}

const resultado = busca(clientes, "nome", "Kirby")

console.log(resultado)