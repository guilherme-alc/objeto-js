// acessando um dado do objetos através do operador "." + nome da propriedade
const cliente = {
    nome: "Andre",
    idade: 25,
    cpf: "14858545698",
    email: "andre@dominio.com"
};

console.log(
    `
    O nome do cliente é ${cliente.nome} e o seu email é ${cliente.email}
    Os 3 últimos digitos do CPF são ${cliente.cpf.substring(8)}
    `
);