// adicionando e alterando propriedades de um objeto
const pessoa = {
    nome: "Lucas",
    profissao: "Engenheiro",
};

console.log(pessoa.nome)

console.log(pessoa.telefone)
pessoa.telefone = "55 911111111"
console.log(pessoa.telefone)

pessoa.nome = "Lucas Ferreira"
console.log(pessoa.nome)

console.log(pessoa)

// variáveis do tipo const apenas não podem ser reatribuidas, mas podem ter seu conteúdo interno alterado.

// deletando um conjunto de chave/valor

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}
console.log(objPersonagem)

delete objPersonagem.aliado
delete objPersonagem["status"]
console.log(objPersonagem)
