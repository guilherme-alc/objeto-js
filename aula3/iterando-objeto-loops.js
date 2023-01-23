const aluno = {
    nome: "Guilherme Augusto Lopes Campos",
    matricula: 598924,
    curso: "Desenvolvimento de Software",
    materias: [
        "Algoritimo",
        "Lógica de programação",
        "JAVA",
        "Calculo 1",
    ],
};

aluno.endereco = {
    rua: "José Barra Do Nascimento",
    numero: 247,
    bairro: "Eldorado",
    cidade: "Contagem",
    estado: "MG",
};

// o método for in permite a iteração sobre as propriedades de um objeto, parecido com a iteração de um array

for (let chave in aluno) { // a cada iteração uma propriedade do objeto é atribuida a variável
    let tipo = typeof aluno[chave];

    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor de ${aluno[chave]}`);
    };
};
