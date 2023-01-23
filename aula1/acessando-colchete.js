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

// com a notação de colchetes podemos acessar uma propriedade através de uma variável
const pessoa = {
    nome: "Johnny",
    idade: "22",
    apelido: "John"
}

const acessaApelido = "apelido" // criando uma variável e colocando o nome da chave em string
console.log(pessoa[acessaApelido]) // acessando a propriedade apelido por meio da variável acessaApelido


// bonus: usando destruction para acessar dados
const { nome : nomeDele, email : emailDele} = cliente
console.log(nomeDele, emailDele)
