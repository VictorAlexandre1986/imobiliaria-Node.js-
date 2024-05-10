// /src/controllers/proprietarioController.js
const ProprietarioUseCase = require('../usecase/proprietario_usecase');

exports.criar = async (req, res) => {
  try {
    const novoProprietario = await ProprietarioUseCase.criar(req.body);
    res.status(201).json(novoProprietario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.listar = async (req, res) => {
  try {
    const proprietarios = await ProprietarioUseCase.listar();
    res.json(proprietarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  try {
    const proprietario = await ProprietarioUseCase.buscarPorId(parseInt(req.params.id));
    res.json(proprietario);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.atualizar = async (req, res) => {
  try {
    await ProprietarioUseCase.atualizar(parseInt(req.params.id), req.body);
    res.json({ message: 'Proprietário atualizado com sucesso' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deletar = async (req, res) => {
  try {
    await ProprietarioUseCase.deletar(parseInt(req.params.id));
    res.json({ message: 'Proprietário deletado com sucesso' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
