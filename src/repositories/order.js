const { where } = require('sequelize');
const { Order, Customer, Product, Seller, Category, User } = require('../database/models/index');

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
            { 
                model: Customer, 
                as: 'customer', 
                attributes: { exclude: [ 'cd_customer', 'cd_user' ] },
                include: [
                    {
                        model: User,
                        as: 'user'
                    }
                ]
            },
            { 
                model: Product, 
                as: 'products', 
                through: { attributes: [] },
                attributes: { exclude: [ 'cd_seller', 'cd_category' ] },
                include: [
                    {
                        model: Seller,
                        as: 'seller',
                        attributes: { exclude: [ 'cd_user' ] },
                        include: [
                            {
                                model: User,
                                as: 'user'
                            }
                        ]
                    },
                    {
                        model: Category,
                        as: 'category'
                    }
                ]
            }
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