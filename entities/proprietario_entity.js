class Proprietario {
    constructor({ id, nome, cpf, email, telefone, imoveis }) {
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
      this.email = email;
      this.telefone = telefone;
      this.imoveis = imoveis;
    }
  }
  
  module.exports = Proprietario;