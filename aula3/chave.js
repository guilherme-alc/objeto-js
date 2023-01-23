const cliente1 = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente1.endereco = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

const cliente2 = {
    nome: "Guilherme",
    idade: 22,
    email: "guilherme@pessoal.com",
    telefone: [125255225, 682548252],
    endereco: {
        rua: "R. José Barra",
        numero: "742",
        apartamento: false,
        complemento: false
    }
};

// o primeiro parâmetro é refente ao objeto e o segundo a info obrigatória para o cadastro
function validaChaves (pessoa, chave) {
    const pegaChavesDoObj = Object.keys(pessoa); //método que retorna uma matriz/array com os nomes das propriedade em strings do objeto passado como parâmetro
    // console.log(pegaChavesDoObj)

    if (!pegaChavesDoObj.includes(chave)) {
        console.log(`Erro. É necessário ter um ${chave} cadastrado.`)
    } else {
        console.log(`O cliente ${pessoa.nome} possui o ${chave} cadastrado`);
    };
}

validaChaves(cliente1, "endereco");
validaChaves(cliente2, "telefone");

console.log(cliente1.hasOwnProperty("idade")); // <- esse método verifica se o objeto possui a propriedade informada e retorna um booleano
console.log(Object.getOwnPropertyNames(cliente2)); // <- esse método faz o mesmo que o Object.keys, porém além das propriedades enumeráveis, ele também retorna as que não são