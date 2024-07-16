const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const criar = function() {
    return [
        body('valueTotal', validatorMessage('Value Total')).exists().bail().isDecimal(),
        body('statusDelivery', validatorMessage('Status Delivery')).exists().bail().isString(),
        body('dateOrder', validatorMessage('Date Order')).exists().bail().isDate(),
        body('dateDelivery', validatorMessage('Date Delivery')).exists().bail().isDate(),
    ]
}

const atualizar = function() {
    return [
        body('valueTotal', validatorMessage('Value Total')).exists().bail().isDecimal(),
        body('statusDelivery', validatorMessage('Status Delivery')).exists().bail().isString(),
        body('dateOrder', validatorMessage('Date Order')).exists().bail().isDate(),
        body('dateDelivery', validatorMessage('Date Delivery')).exists().bail().isDate(),
        param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

const encontrarPorId = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

const deletar = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

module.exports = {
    criar: criar,
    encontrarPorId: encontrarPorId,
    atualizar: atualizar,
    deletar: deletar
}