const aluno = {
    nome: "Guilherme Augusto Lopes Campos",
    matricula: 598924,
    curso: "Desenvolvimento de Software",
    materias: [
        "Algoritimo",
        "Lógica de programação",
        "JAVA",
        "Calculo 1"
    ],
};

aluno.endereco = {  // criando uma propriedade nova para o objeto aluno
    rua: "José Barra Do Nascimento",
    numero: 247,
    bairro: "Eldorado",
    cidade: "Contagem",
    estado: "MG",
};

console.log(aluno.endereco.bairro)

delete aluno["endereco"].estado //acessando uma propriedade de um objeto dentro de um objeto através de um colchetes e ponto e deletando ela
console.log(aluno)