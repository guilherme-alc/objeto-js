// extraindo valor de um objeto usando destructturing - desestruturando objetos

const fornecedor = {
    razaosocial : "Alura - Cursos Online", 
    cnpj : "00.000.000/0000-00", 
    email : "suporte@alura.com.br"
};

// criando variáveis usando os mesmos nomes das propriedades (para fazer uma associação a elas) do objeto entre chaves e atribuindo ao mesmo
// {variáveis} = objeto
const {razaosocial, cnpj} = fornecedor
console.log(razaosocial, cnpj)


const pessoa = {
    a : "Matheus", 
    b : "23", 
    c : "matheushcastiglioni@gmail.com"
};

// é possível também referenciar uma variável a uma propriedade com um nome diferente
// {propriedade: variável} = objeto
const {a: nome, b: idade, c: email} = pessoa
console.log(nome, idade, email)
// isso seria equivalente a:
/*
    const nome = json.a;
    const idade = json.b;
    const email = json.c;
    console.log(nome);
    console.log(idade);
    console.log(email);
*/

// criando variáveis
const [num1, num2, ...numerosRestantes] = [1, 2, 3, 4, 5]
console.log(num1, num2, numerosRestantes)