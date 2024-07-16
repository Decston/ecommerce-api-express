const orderService = require('../services/order');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const criar = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await orderService.criar({
            valueTotal: req.body.valueTotal,
            dateOrder: req.body.dateOrder,
            dateDelivery: req.body.dateDelivery,
            statusDelivery: req.body.statusDelivery,
            cdCustomer: req.body.cdCustomer
        });
        
        res.send(response);
    } catch(error) {
        return next(error);
    }
}

const atualizar = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await orderService.atualizar({
            valueTotal: req.body.valueTotal,
            dateOrder: req.body.dateOrder,
            dateDelivery: req.body.dateDelivery,
            statusDelivery: req.body.statusDelivery,
            cdCustomer: req.body.cdCustomer
        }, req.params.id);

        if(response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const encontrarTodos = async function(req, res, next) {
    try {
        const response = await orderService.encontrarTodos();

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const encontrarPorId = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        
        const response = await orderService.encontrarPorId(req.params.id);

        if(response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const deletar = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        
        const response = await orderService.deletar(req.params.id);

        if(response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    criar: criar, 
    atualizar: atualizar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    deletar: deletar
}