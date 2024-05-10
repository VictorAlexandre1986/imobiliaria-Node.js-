// /src/useCases/pagamentoUseCase.js
const PagamentoRepository = require('../repositories/pagamento_repo');
const Pagamento = require('../entities/pagamento_entity');

class PagamentoUseCase {
  async criar(pagamentoData) {
    const novoPagamento = await PagamentoRepository.criar(pagamentoData);
    return new Pagamento(novoPagamento);
  }

  async listar() {
    const pagamentos = await PagamentoRepository.listar();
    return pagamentos.map(pagamento => new Pagamento(pagamento));
  }

  async buscarPorId(id) {
    const pagamento = await PagamentoRepository.buscarPorId(id);
    if (!pagamento) {
      throw new Error('Pagamento não encontrado');
    }
    return new Pagamento(pagamento);
  }

  async atualizar(id, pagamentoData) {
    await PagamentoRepository.buscarPorId(id); // Verifica se o pagamento existe
    return await PagamentoRepository.atualizar(id, pagamentoData);
  }

  async deletar(id) {
    await PagamentoRepository.buscarPorId(id); // Verifica se o pagamento existe
    return await PagamentoRepository.deletar(id);
  }
}

module.exports = new PagamentoUseCase();
