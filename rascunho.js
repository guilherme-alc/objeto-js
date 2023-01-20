const cliente = {
    nome: "Jose",
    idade:33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
}

cliente.animalEstimacao = [
{nome: "Kripto", raça: "Cão", vacinado: true}
]

cliente.animalEstimacao.push(
    {nome: "Lex", raça: "Gato", vacinado: false},
    {nome: "Thor", raça: "Cão", vacinado: false},
    {nome: "Layla", raça: "Cão", vacinado: false},
    {nome: "Mel", raça: "Cão", vacinado: false},
    {nome: "Miau", raça: "Gato", vacinado: true}
);

console.log(cliente)

const animalSemVacina = cliente.animalEstimacao.filter( animal => animal.vacinado === false)

console.log(animalSemVacina)

console.log("-----------------------------Agora vou vacinar eles-----------------------------")

const vacinaAnimal = animalSemVacina.map( (animal) => {
    return {nome: animal.nome, raça: animal.raça, vacinado: animal.vacinado = true}
});

console.log(vacinaAnimal)