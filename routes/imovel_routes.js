// /src/routes/imovelRoutes.js
const express = require('express');
const router = express.Router();
const imovelController = require('../controller/imovel_controller');

/**
 * @openapi
 * components:
 *   schemas:
 *     Imovel:
 *       type: object
 *       required:
 *         - endereco
 *         - numero
 *         - bairro
 *         - cidade
 *         - preco
 *         - alugado
 *         - proprietarioId
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do imóvel
 *         endereco:
 *           type: string
 *           description: Endereço do imóvel
 *         numero:
 *           type: string
 *           description: Número do imóvel
 *         bairro:
 *           type: string
 *           description: Bairro do imóvel
 *         cidade:
 *           type: string
 *           description: Cidade do imóvel
 *         preco:
 *           type: number
 *           description: Preço do imóvel
 *         alugado:
 *           type: boolean
 *           description: Indica se o imóvel está alugado
 *         proprietarioId:
 *           type: integer
 *           description: ID do proprietário do imóvel
 */

router.post('/', imovelController.criar);
router.get('/', imovelController.listar);

/**
 * @openapi
 * /imovel:
 *   get:
 *     summary: Lista todos os imóveis
 *     responses:
 *       '200':
 *         description: Lista de imóveis
 *   post:
 *     summary: Cria um novo imóvel
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Imovel"
 *     responses:
 *       '201':
 *         description: Imóvel criado com sucesso
 *       '400':
 *         description: Erro na requisição
 */

router.get('/:id', imovelController.buscarPorId);
router.put('/:id', imovelController.atualizar);
router.delete('/:id', imovelController.deletar);

/**
 * @openapi
 * /imovel/{id}:
 *   get:
 *     summary: Busca um imóvel pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do imóvel a ser buscado
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Imóvel encontrado
 *       '404':
 *         description: Imóvel não encontrado
 *   put:
 *     summary: Atualiza um imóvel existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do imóvel a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Imovel"
 *     responses:
 *       '200':
 *         description: Imóvel atualizado com sucesso
 *       '404':
 *         description: Imóvel não encontrado
 *   delete:
 *     summary: Deleta um imóvel existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do imóvel a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Imóvel deletado com sucesso
 *       '404':
 *         description: Imóvel não encontrado
 */

module.exports = router;



