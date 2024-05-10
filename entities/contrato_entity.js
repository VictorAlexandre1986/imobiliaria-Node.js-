// /src/entities/contrato.js
class Contrato {
    constructor({ id, idCliente, idImovel, valor, cliente, pagamento }) {
      this.id = id;
      this.idCliente = idCliente;
      this.idImovel = idImovel;
      this.valor = valor;
      this.cliente = cliente;
      this.pagamento = pagamento;
    }
  }
  
  module.exports = Contrato;
  