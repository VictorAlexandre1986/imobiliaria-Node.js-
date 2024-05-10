// /src/repositories/proprietarioRepository.js
const { PrismaClient } = require('@prisma/client');
const Prisma = new PrismaClient();

class ProprietarioRepository {
  async criar(proprietarioData) {
    return await Prisma.proprietario.create({ data: proprietarioData });
  }

  async listar() {
    return await Prisma.proprietario.findMany();
  }

  async buscarPorId(id) {
    return await Prisma.proprietario.findUnique({ where: { id } });
  }

  async atualizar(id, proprietarioData) {
    return await Prisma.proprietario.update({ where: { id }, data: proprietarioData });
  }

  async deletar(id) {
    return await Prisma.proprietario.delete({ where: { id } });
  }
}

module.exports = new ProprietarioRepository();
