// /src/routes/pagamentoRoutes.js
const express = require('express');
const router = express.Router();
const pagamentoController = require('../controller/pagamento_controller');


/**
 * @openapi
 * components:
 *   schemas:
 *     Pagamento:
 *       type: object
 *       required:
 *         - contrato
 *         - data_venc
 *         - valor
 *        properties:
 *         id:
 *           type: integer
 *           description: ID único do pagamento
 *         contrato:
 *           type: string
 *           description: Contrato do pagamento
 *         data_venc:
 *           type: datetime
 *           description: Data de vencimento
 *         valor:
 *           type: number
 *           description: Valor do pagamento
 *         
 */


router.post('/', pagamentoController.criar);
router.get('/', pagamentoController.listar);

/**
 * @openapi
 * /pagamentos:
 *   get:
 *     summary: Lista todos os pagamentos
 *     responses:
 *       '200':
 *         description: Lista de pagamentos
 *   post:
 *     summary: Cria um novo pagamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Pagamento"
 *     responses:
 *       '201':
 *         description: Pagamento criado com sucesso
 *       '400':
 *         description: Erro na requisição
 */

router.get('/:id', pagamentoController.buscarPorId);
router.put('/:id', pagamentoController.atualizar);
router.delete('/:id', pagamentoController.deletar);


/**
 * @openapi
 * /pagamentos/{id}:
 *   get:
 *     summary: Busca um pagamento pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pagamento a ser buscado
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Pagamento encontrado
 *       '404':
 *         description: Pagamento não encontrado
 *   put:
 *     summary: Atualiza um contrato existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pagamento a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Pagamento"
 *     responses:
 *       '200':
 *         description: Pagamento atualizado com sucesso
 *       '404':
 *         description: Pagamento não encontrado
 *   delete:
 *     summary: Deleta um pagamento existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pagamento a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Pagamento deletado com sucesso
 *       '404':
 *         description: Pagamento não encontrado
 */

module.exports = router;
