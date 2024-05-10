// /src/routes/proprietarioRoutes.js
const express = require('express');
const router = express.Router();
const proprietarioController = require('../controller/proprietario_controller');

/**
 * @openapi
 * components:
 *   schemas:
 *     Proprietario:
 *       type: object
 *       required:
 *         - nome
 *         - cpf
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do cliente
 *         nome:
 *           type: string
 *           description: Nome do cliente
 *         cpf:
 *           type: string
 *           description: CPF do cliente
 *         email:
 *           type: string
 *           format: email
 *           description: Email do cliente
 *         telefone:
 *           type: string
 *           description: Telefone do cliente
 */


router.post('/', proprietarioController.criar);
router.get('/', proprietarioController.listar);

/**
 * @openapi
 * /proprietarios:
 *   get:
 *     summary: Lista todos os proprietarios
 *     responses:
 *       '200':
 *         description: Lista de proprietarios
 *   post:
 *     summary: Cria um novo proprietario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Proprietario"
 *     responses:
 *       '201':
 *         description: Proprietario criado com sucesso
 *       '400':
 *         description: Erro na requisição
 */

router.get('/:id', proprietarioController.buscarPorId);
router.put('/:id', proprietarioController.atualizar);
router.delete('/:id', proprietarioController.deletar);


/**
 * @openapi
 * /proprietarios/{id}:
 *   get:
 *     summary: Busca um proprietario pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do proprietario a ser buscado
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Proprietario encontrado
 *       '404':
 *         description: Proprietario não encontrado
 *   put:
 *     summary: Atualiza um proprietario existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do proprietario a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Proprietario"
 *     responses:
 *       '200':
 *         description: Proprietario atualizado com sucesso
 *       '404':
 *         description: Proprietario não encontrado
 *   delete:
 *     summary: Deleta um proprietario existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do proprietario a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Proprietario deletado com sucesso
 *       '404':
 *         description: Proprietario não encontrado
 */

module.exports = router;
