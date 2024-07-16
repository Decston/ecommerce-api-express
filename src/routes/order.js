const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');
const orderValidator = require('../validators/order');

router.post('/', orderValidator.criar(), orderController.criar);
router.get('/', orderController.encontrarTodos);
router.get('/:id', orderValidator.encontrarPorId(), orderController.encontrarPorId);
router.put('/:id', orderValidator.atualizar(), orderController.atualizar);
router.delete('/:id', orderValidator.deletar(), orderController.deletar);

module.exports = router;