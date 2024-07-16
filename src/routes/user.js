const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const userValidator = require('../validators/user.validator');

router.post('/', userValidator.criar(), userController.criar);
router.get('/', userController.encontrarTodos);
router.get('/:id', userValidator.encontrarPorId(), userController.encontrarPorId);
router.put('/:id', userValidator.atualizar(), userController.atualizar);
router.delete('/:id', userValidator.deletar(), userController.deletar);

module.exports = router;