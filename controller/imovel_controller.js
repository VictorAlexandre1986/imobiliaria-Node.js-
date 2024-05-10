// /src/controllers/imovelController.js
const ImovelUseCase = require('../usecase/imovel_usecase');

exports.criar = async (req, res) => {
  try {
    const novoImovel = await ImovelUseCase.criar(req.body);
    res.status(201).json(novoImovel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.listar = async (req, res) => {
  try {
    const imoveis = await ImovelUseCase.listar();
    res.json(imoveis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  try {
    const imovel = await ImovelUseCase.buscarPorId(parseInt(req.params.id));
    res.json(imovel);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.atualizar = async (req, res) => {
  try {
    await ImovelUseCase.atualizar(parseInt(req.params.id), req.body);
    res.json({ message: 'Imóvel atualizado com sucesso' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deletar = async (req, res) => {
  try {
    await ImovelUseCase.deletar(parseInt(req.params.id));
    res.json({ message: 'Imóvel deletado com sucesso' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
