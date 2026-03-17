// src/routes/inscricaoRoutes.js
const express = require("express");
const router = express.Router();
const InscricaoController = require("../controllers/InscricaoController");

/**
 * @swagger
 * tags:
 *   name: Inscrições
 *   description: Gerenciamento de inscrições em eventos
 */

/**
 * @swagger
 * /inscricoes:
 *   post:
 *     summary: Cria uma nova inscrição
 *     tags: [Inscrições]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               participanteId:
 *                 type: integer
 *               eventoId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Inscrição criada com sucesso
 */
router.post("/", InscricaoController.store);

/**
 * @swagger
 * /inscricoes:
 *   get:
 *     summary: Lista todas as inscrições
 *     tags: [Inscrições]
 *     responses:
 *       200:
 *         description: Lista de inscrições
 */
router.get("/", InscricaoController.index);

/**
 * @swagger
 * /inscricoes/evento/{eventoId}:
 *   get:
 *     summary: Lista inscrições por evento
 *     tags: [Inscrições]
 *     parameters:
 *       - in: path
 *         name: eventoId
 *         required: true
 *         description: ID do evento
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de inscrições do evento
 */
router.get("/evento/:eventoId", InscricaoController.listarPorEvento);

/**
 * @swagger
 * /inscricoes/{id}/cancelar:
 *   patch:
 *     summary: Cancela uma inscrição
 *     tags: [Inscrições]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da inscrição
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Inscrição cancelada com sucesso
 *       404:
 *         description: Inscrição não encontrada
 */
router.patch("/:id/cancelar", InscricaoController.cancelar);

/**
 * @swagger
 * /inscricoes/{id}/detalhes:
 *   get:
 *     summary: Exibe detalhes de uma inscrição
 *     tags: [Inscrições]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da inscrição
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalhes da inscrição
 *       404:
 *         description: Inscrição não encontrada
 */
router.get("/:id/detalhes", InscricaoController.detalhes);

module.exports = router;