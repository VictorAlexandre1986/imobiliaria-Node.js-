// /src/useCases/contratoUseCase.js
const ContratoRepository = require('../repositories/contrato_repo');
const Contrato = require('../entities/contrato_entity');

class ContratoUseCase {
  async criar(contratoData) {
    const novoContrato = await ContratoRepository.criar(contratoData);
    return new Contrato(novoContrato);
  }

  async listar() {
    const contratos = await ContratoRepository.listar();
    return contratos.map(contrato => new Contrato(contrato));
  }

  async buscarPorId(id) {
    const contrato = await ContratoRepository.buscarPorId(id);
    if (!contrato) {
      throw new Error('Contrato não encontrado');
    }
    return new Contrato(contrato);
  }

  async atualizar(id, contratoData) {
    await ContratoRepository.buscarPorId(id); // Verifica se o contrato existe
    return await ContratoRepository.atualizar(id, contratoData);
  }

  async deletar(id) {
    await ContratoRepository.buscarPorId(id); // Verifica se o contrato existe
    return await ContratoRepository.deletar(id);
  }
}

module.exports = new ContratoUseCase();
