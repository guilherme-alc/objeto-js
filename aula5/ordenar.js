const clientes = require("./clientes.json")

function ordenar (lista, propriedade) { //recebe a lista que vai ser analisada e a propriedade na qual deseja ordenar
    const resultado = lista.sort( (a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1
        }
        if (a[propriedade] > b[propriedade]) {
            return 1
        }
        return 0;
    });
    return resultado
}

const nomeOrdenado = ordenar(clientes, "nome");
console.log(nomeOrdenado)

const nomeOrdenadoInverso = nomeOrdenado.reverse()
console.log(nomeOrdenadoInverso)