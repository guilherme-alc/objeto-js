// Por ser um tipo de dado complexo o Js atribui um objeto a outro por referência na memória. Ex:
const personagem = {
    nome: "Haviel",
    classe: "Arqueiro",
    level: 32,
};

const personagemUpado = personagem; // a nova variável não fez uma cópia, apenas está apontando ao lugar do objeto na memória através de um novo nome
personagemUpado.level = 40; // portanto, qualquer mudança feita em qualquer um dos objetos vai alterar ambos

// console.log(personagem);
// console.log(personagemUpado);

/* Além de criar um objeto da forma de notação literal (lista de chaves e valores dentero das "{}" atribuidos a uma variável)
podemos criar um objeto através do método Object.create() que usa um outro objeto como protótipo em seu parâmetro */

const personagemCopia = structuredClone(personagemUpado);
personagemCopia.level = 50
 

console.log(personagemUpado)
console.log(personagemCopia)