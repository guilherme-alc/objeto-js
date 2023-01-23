const cliente = {
    nome: "Andre",
    idade: 25,
    cpf: "14858545698",
    email: "andre@dominio.com",
    telefone: [5131914151612, 5131987898485],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente")
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }, 
};

cliente.efetuaPagamento(25)