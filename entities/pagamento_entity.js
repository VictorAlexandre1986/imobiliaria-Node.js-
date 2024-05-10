// /src/entities/pagamento.js
class Pagamento {
    constructor({ id, contrato, data_venc, valor }) {
      this.id = id;
      this.contrato = contrato;
      this.data_venc = data_venc;
      this.valor = valor;
    }
  }
  
  module.exports = Pagamento;
  