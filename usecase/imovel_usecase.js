// /src/useCases/imovelUseCase.js
const ImovelRepository = require('../repositories/imovel_repo');
const Imovel = require('../entities/imovel_entity');

class ImovelUseCase {
  async criar(imovelData) {
    const novoImovel = await ImovelRepository.criar(imovelData);
    return new Imovel(novoImovel);
  }

  async listar() {
    const imoveis = await ImovelRepository.listar();
    return imoveis.map(imovel => new Imovel(imovel));
  }

  async buscarPorId(id) {
    const imovel = await ImovelRepository.buscarPorId(id);
    if (!imovel) {
      throw new Error('Imóvel não encontrado');
    }
    return new Imovel(imovel);
  }

  async atualizar(id, imovelData) {
    await ImovelRepository.buscarPorId(id); // Verifica se o imóvel existe
    return await ImovelRepository.atualizar(id, imovelData);
  }

  async deletar(id) {
    await ImovelRepository.buscarPorId(id); // Verifica se o imóvel existe
    return await ImovelRepository.deletar(id);
  }
}

module.exports = new ImovelUseCase();
