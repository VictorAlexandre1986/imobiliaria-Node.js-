// /src/entities/imovel.js
class Imovel {
    constructor({ id, endereco, numero, bairro, cidade, preco, descricao, alugado, proprietario }) {
      this.id = id;
      this.endereco = endereco;
      this.numero = numero;
      this.bairro = bairro;
      this.cidade = cidade;
      this.preco = preco;
      this.descricao = descricao;
      this.alugado = alugado;
      this.proprietario = proprietario;
    }
  }
  
  module.exports = Imovel;
  