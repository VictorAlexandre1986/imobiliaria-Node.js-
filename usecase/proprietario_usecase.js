// /src/useCases/proprietarioUseCase.js
const ProprietarioRepository = require('../repositories/proprietario_repo');
const Proprietario = require('../entities/proprietario_entity');

class ProprietarioUseCase {
  async criar(proprietarioData) {
    const novoProprietario = await ProprietarioRepository.criar(proprietarioData);
    return new Proprietario(novoProprietario);
  }

  async listar() {
    const proprietarios = await ProprietarioRepository.listar();
    return proprietarios.map(proprietario => new Proprietario(proprietario));
  }

  async buscarPorId(id) {
    const proprietario = await ProprietarioRepository.buscarPorId(id);
    if (!proprietario) {
      throw new Error('Proprietário não encontrado');
    }
    return new Proprietario(proprietario);
  }

  async atualizar(id, proprietarioData) {
    await ProprietarioRepository.buscarPorId(id); // Verifica se o proprietário existe
    return await ProprietarioRepository.atualizar(id, proprietarioData);
  }

  async deletar(id) {
    await ProprietarioRepository.buscarPorId(id); // Verifica se o proprietário existe
    return await ProprietarioRepository.deletar(id);
  }
}

module.exports = new ProprietarioUseCase();
