const express = require("express");
const router = express.Router();
const ParticipanteController = require("../controllers/ParticipanteController");

/**
 * @swagger
 * tags:
 *   name: Participantes
 *   description: Gerenciamento de participantes
 */

/**
 * @swagger
 * /participantes:
 *   get:
 *     summary: Lista todos os participantes
 *     tags: [Participantes]
 *     responses:
 *       200:
 *         description: Lista de participantes retornada com sucesso
 */
router.get("/", ParticipanteController.index); // GET /participantes

/**
 * @swagger
 * /participantes/{id}:
 *   get:
 *     summary: Busca um participante pelo ID
 *     tags: [Participantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do participante
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Participante encontrado
 *       404:
 *         description: Participante não encontrado
 */
router.get("/:id", ParticipanteController.show); // GET /participantes/:id

/**
 * @swagger
 * /participantes:
 *   post:
 *     summary: Cria um novo participante
 *     tags: [Participantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Participante criado com sucesso
 */
router.post("/", ParticipanteController.store); // POST /participantes

/**
 * @swagger
 * /participantes/{id}:
 *   put:
 *     summary: Atualiza um participante
 *     tags: [Participantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do participante
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Participante atualizado com sucesso
 *       404:
 *         description: Participante não encontrado
 */
router.put("/:id", ParticipanteController.update); // PUT /participantes/:id

/**
 * @swagger
 * /participantes/{id}:
 *   delete:
 *     summary: Remove um participante
 *     tags: [Participantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do participante
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Participante removido com sucesso
 *       404:
 *         description: Participante não encontrado
 */
router.delete("/:id", ParticipanteController.destroy); // DELETE /participantes/:id

module.exports = router;