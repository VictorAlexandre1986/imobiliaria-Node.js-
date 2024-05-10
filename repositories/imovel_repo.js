// /src/repositories/imovelRepository.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ImovelRepository {
  async criar(imovelData) {
    return await prisma.imovel.create({ data: imovelData });
  }

  async listar() {
    return await prisma.imovel.findMany();
  }

  async buscarPorId(id) {
    return await prisma.imovel.findUnique({ where: { id } });
  }

  async atualizar(id, imovelData) {
    return await prisma.imovel.update({ where: { id }, data: imovelData });
  }

  async deletar(id) {
    return await prisma.imovel.delete({ where: { id } });
  }
}

module.exports = new ImovelRepository();
