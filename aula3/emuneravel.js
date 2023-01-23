// emunerável é um atributo interno (característica) de uma propriedade
const pessoa = {
    primeiroNome: "Guilherme",
    ultimoNome: "Campos",
};

pessoa.idade = 21;
// essas propriedades são enumeráveis, pois são criadas por meio de uma atribuição simples

// criando uma propriedade para o objeto pessoa, definindo o nome da propriedade e configurando as características
Object.defineProperty(pessoa, "habilitacao", {
    enumerable: false,
    value: "Possui CNH - Categoria C" // <-- value também é um atributo interno, que no caso, é o valor da propriedade
});

for (chave in pessoa) {
    console.log(chave); // por a propriedade habilitacao receber o atributo emunerável como false, ele não aparece no loop
};


// verificando se as propriedades são emuneráveis ou não através de uma função pra flexibilizar o código e usando o método propertyIsEnumerable()
function exibeNoConsole (info) {
    console.log(info);
};

function verificaEmuneravel (obj, chave) {
    exibeNoConsole(obj.propertyIsEnumerable(chave));
};

verificaEmuneravel(pessoa, "primeiroNome");
verificaEmuneravel(pessoa, "idade");
verificaEmuneravel(pessoa, "habilitacao"); // <-- retorna false pois não é emunerável

console.log(Object.getOwnPropertyNames(pessoa)); // <-- retorna array com TODAS as propriedades
console.log(Object.keys(pessoa)); // <-- retorna array apenas com as propriedades emuneráveis