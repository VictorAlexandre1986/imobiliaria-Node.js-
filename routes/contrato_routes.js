const express = require('express');
const router = express.Router();
const contratoController = require('../controller/contrato_controller');

/**
 * @openapi
 * components:
 *   schemas:
 *     Contrato:
 *       type: object
 *       required:
 *         - id_cliente
 *         - id_imovel
 *         - valor
 *         - clienteId
 *         - pagamentoId
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do contrato
 *         id_cliente:
 *           type: int
 *           description: Id do cliente
 *         id_imovel:
 *           type: int
 *           description: Id único do imóvel
 *         valor:
 *           type: float
 *           description: Valor do contrato
 *         clienteId:
 *           type: int
 *           description: Id do cliente
 *         pagamentoId:
 *           type: int
 *           description: Id do pagamento
 */

router.post('/', contratoController.criar);
router.get('/', contratoController.listar);

/**
 * @openapi
 * /contratos:
 *   get:
 *     summary: Lista todos os contratos
 *     responses:
 *       '200':
 *         description: Lista de contratos
 *   post:
 *     summary: Cria um novo contrato
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Contrato"
 *     responses:
 *       '201':
 *         description: Contrato criado com sucesso
 *       '400':
 *         description: Erro na requisição
 */

router.get('/:id', contratoController.buscarPorId);
router.put('/:id', contratoController.atualizar);
router.delete('/:id', contratoController.deletar);


/**
 * @openapi
 * /contratos/{id}:
 *   get:
 *     summary: Busca um contrato pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do contrato a ser buscado
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Contrato encontrado
 *       '404':
 *         description: Contrato não encontrado
 *   put:
 *     summary: Atualiza um contrato existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do contrato a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Contrato"
 *     responses:
 *       '200':
 *         description: Contrato atualizado com sucesso
 *       '404':
 *         description: Contrato não encontrado
 *   delete:
 *     summary: Deleta um contrato existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do contrato a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Contrato deletado com sucesso
 *       '404':
 *         description: Contrato não encontrado
 */

module.exports = router;
