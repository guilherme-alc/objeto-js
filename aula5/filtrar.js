// filtrando clientes que moram em apartamento, mas que não possuem o complemento no cadastro
// minha forma de fazer:
const clientes = require("./clientes.json");

function verificaApartamento (lista) {
    const listaApartamento = lista.filter( (item) => {
       return item.endereco.apartamento === true; // aqui eu poderia omitir o "=== true"
    });
    const validaComplemento = listaApartamento.forEach((cliente) => {
        if (!cliente.endereco.complemento) {
            console.log("Erro. Falta complemento no campo de endereço");
        } else {
            console.log("Contem complemento")
        };
    });
    console.log(validaComplemento);
};

verificaApartamento(clientes);

// forma ensinada:
function filtrarApartamentoSemComplemento (lista) {
    return lista.filter( (cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")); // aqui foi omitido o "=== true" e usou o operador de negação ! junto com o método que verifica se o objeto possui a propriedade e retorna um booleano
    });
};
const filtrados = filtrarApartamentoSemComplemento(clientes);
// console.log(filtrados);