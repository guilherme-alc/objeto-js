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

const umObjeto = {
    prop1: "a",
    prop2: "b",
    prop3: "c",
    prop4: ["d", "e", "f", "g"],
    prop5: {
        listaNum: [1, 2, 3, 4, 5]
    },
    prop6: {
        outroObj: {
            comOutroObjeto : "Guilherme"
        }
    }
};

const letraG = umObjeto.prop4[3];
const num5 = umObjeto.prop5.listaNum[4]
const meuNome = umObjeto.prop6.outroObj.comOutroObjeto

console.log(letraG)
console.log(num5)
console.log(meuNome)