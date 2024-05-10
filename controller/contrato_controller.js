// /src/controllers/contratoController.js
const ContratoUseCase = require('../usecase/contrato_usecase');

exports.criar = async (req, res) => {
  try {
    const novoContrato = await ContratoUseCase.criar(req.body);
    res.status(201).json(novoContrato);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.listar = async (req, res) => {
  try {
    const contratos = await ContratoUseCase.listar();
    res.json(contratos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  try {
    const contrato = await ContratoUseCase.buscarPorId(parseInt(req.params.id));
    res.json(contrato);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.atualizar = async (req, res) => {
  try {
    await ContratoUseCase.atualizar(parseInt(req.params.id), req.body);
    res.json({ message: 'Contrato atualizado com sucesso' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deletar = async (req, res) => {
  try {
    await ContratoUseCase.deletar(parseInt(req.params.id));
    res.json({ message: 'Contrato deletado com sucesso' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
