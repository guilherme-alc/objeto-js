const cliente = {
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

function ligaParaCliente (telefoneComercial, telefoneResidencial) {
    console.log(`
    Ligando para ${telefoneComercial}
    Ligando para ${telefoneResidencial}
    `)
};

ligaParaCliente(...cliente.telefone);

// spread operator também pode ser usado em objetos
const cliente2 = {
    nome: "Domingos",
    idade: 49,
    ...cliente.endereco,
    email: "domingos@empresa.com",
    telefone: [15151515, 84848456]
};

console.log(cliente2);

const funcionario = {
    nome: "Guilherme",
    profissao: "Developer",
    senioridade: "Junior"
};

const funcionarioComContato = {
    ...funcionario,
    contato: 31999121212,
};
console.log(funcionarioComContato);
