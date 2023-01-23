const cliente = {
    nome: "Andre",
    idade: 25,
    cpf: "14858545698",
    email: "andre@dominio.com",
    telefone: [5131914151612, 5131987898485],
    enderecos : [   // <- essa propriedade tem um comportamento de lista
        {rua: "x", numero: "x", apartamento: true},
    ],
};

cliente.enderecos.push({rua: "y", numero: "y", apartamento: true}, {rua: "z", numero: "z", apartamento: false});
console.log(cliente);

const filtraApartamento = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);
console.log(filtraApartamento);

// quando temos uma lista de objetos ou uma lista dentro de um objetos, podemos manipular eles com os métodos de lista