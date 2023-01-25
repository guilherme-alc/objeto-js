const nomes = [5, 6, "biruleibe", 8, "GiLeRto", "GiLmar", 7, "flORInda", 9, "ConceiÇÃO", 9, "JoaQuim", 6, 8, "MaRILEne"]

// for (let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i])
// }

// for (elemento of nomes) {
//     console.log(elemento)
// }

// const oEach = nomes.forEach( (elemento, indice, lista) => {
//     console.log(elemento, indice, lista)
// })

// const oFind = nomes.filter((item) => typeof item == "string")
// console.log(oFind)

const numeros = new Set ([1, 2, 3, 4, 4, 5, 5, 6])
const maisNumeros = [1, 2, 3, 7, 8, 8, 9, 5]
const juntaNumeros = new Set ([...numeros, ...maisNumeros])

console.log([...juntaNumeros])

const seTem = juntaNumeros.add(10)
console.log(seTem)