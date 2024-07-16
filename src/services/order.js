const orderRepository = require('../repositories/order');
const createError = require('http-errors');

const criar = async function(order) {
    const orderCriado = await orderRepository.criar(order);
    return orderCriado;
}

const atualizar = async function(order, id) {
    const orderExiste = await orderRepository.encontrarPorId(id);

    if(!orderExiste) {
        return createError(409, "order não existe!");
    }

    await orderRepository.atualizar(order, id);

    return await orderRepository.encontrarPorId(id);
}

const encontrarTodos = async function() {
    const orders = await orderRepository.encontrarTodos();
    return orders;
}

const encontrarPorId = async function(id) {
    const order = await orderRepository.encontrarPorId(id);

    if(!order) {
        return createError(404, "order nao existe!");
    }
    
    return order;
}

const deletar = async function(id) {
    const order = await orderRepository.encontrarPorId(id);

    if(!order) {
        return createError(404, "order nao existe!");
    }

    await orderRepository.deletar(id);
    
    return order;
}

module.exports = {
    criar: criar,
    atualizar: atualizar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    deletar: deletar
}