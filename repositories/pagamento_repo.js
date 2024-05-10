// /src/repositories/pagamentoRepository.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class PagamentoRepository {
  async criar(pagamentoData) {
    return await prisma.pagamento.create({ data: pagamentoData });
  }

  async listar() {
    return await prisma.pagamento.findMany();
  }

  async buscarPorId(id) {
    return await prisma.pagamento.findUnique({ where: { id } });
  }

  async atualizar(id, pagamentoData) {
    return await prisma.pagamento.update({ where: { id }, data: pagamentoData });
  }

  async deletar(id) {
    return await prisma.pagamento.delete({ where: { id } });
  }
}

module.exports = new PagamentoRepository();
