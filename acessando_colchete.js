const cliente = {
    nome: "Andre",
    idade: 25,
    cpf: "14858545698",
    email: "andre@dominio.com"
};

// nome da propriedade como string dentro de colchetes. obs: necessário o uso de aspas
console.log(
    `
    O nome do cliente é ${cliente["nome"]} e o seu email é ${cliente["email"]}
    e essa pesoa tem ${cliente["idade"]} anos.
    `
);

// suponhamos que não sabemos os valores das chaves, mas que o único dado que possuimos é uma lista com os nomes das propriedades
const chaves = ["nome", "idade", "cpf", "email", "altura"];

// percorrendo a lista e capturando os valores
chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`) // acessar com o "." não funcionaria
});
