// /src/repositories/contratoRepository.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ContratoRepository {
  async criar(contratoData) {
    return await prisma.contrato.create({ data: contratoData });
  }

  async listar() {
    return await prisma.contrato.findMany();
  }

  async buscarPorId(id) {
    return await prisma.contrato.findUnique({ where: { id } });
  }

  async atualizar(id, contratoData) {
    return await prisma.contrato.update({ where: { id }, data: contratoData });
  }

  async deletar(id) {
    return await prisma.contrato.delete({ where: { id } });
  }
}

module.exports = new ContratoRepository();
