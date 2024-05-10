// /src/controllers/pagamentoController.js
const PagamentoUseCase = require('../usecase/pagamento_usecase');

exports.criar = async (req, res) => {
  try {
    const novoPagamento = await PagamentoUseCase.criar(req.body);
    res.status(201).json(novoPagamento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.listar = async (req, res) => {
  try {
    const pagamentos = await PagamentoUseCase.listar();
    res.json(pagamentos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  try {
    const pagamento = await PagamentoUseCase.buscarPorId(parseInt(req.params.id));
    res.json(pagamento);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.atualizar = async (req, res) => {
  try {
    await PagamentoUseCase.atualizar(parseInt(req.params.id), req.body);
    res.json({ message: 'Pagamento atualizado com sucesso' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deletar = async (req, res) => {
  try {
    await PagamentoUseCase.deletar(parseInt(req.params.id));
    res.json({ message: 'Pagamento deletado com sucesso' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
