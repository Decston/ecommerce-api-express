const { where } = require('sequelize');
const { Order, Customer, Product } = require('../database/models/index');

const criar = async function(order) {
    const orderCriado = await Order.create(order);
    return orderCriado;
}

const atualizar = async function(order, id) {
    await Order.update(order, {
        where: { id: id }
    })
}

const encontrarTodos = async function() {
    const orders = await Order.findAll({
        attributes: { exclude: ['cd_customer'] },
        include: [
            { model: Customer, as: 'customer', attributes: { exclude: ['cd_customer'] } },
            { model: Product, as: 'products', through: { attributes: [] } }
        ],
    });
    return orders;
}

const encontrarPorId = async function(id) {
    const order = await Order.findByPk(id);
    return order;
}

const encontrarUmPorWhere = async function(where) {
    const order = await Order.findOne({
        where: where
    });
    return order;
}

const deletar = async function(id) {
    return await Order.destroy({
        where: { id: id }
    })
}

module.exports = {
    criar: criar,
    atualizar: atualizar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    encontrarUmPorWhere: encontrarUmPorWhere,
    deletar: deletar
}