const { where } = require('sequelize');
const db = require('../database/models/index');
const { User } = require('../database/models/index');

const criar = async function(usuario) {
    const userCriado = await User.create(usuario);
    return userCriado;
}

const atualizar = async function(usuario, id) {
    await User.update(usuario, {
        where: { id: id }
    });
}

const encontrarTodos = async function() {
    const users = await User.findAll();
    return users;
}

const encontrarPorId = async function(id) {
    const user = await User.findByPk(id);
    return user;
}

const encontrarUmPorWhere = async function(where) {
    const user = await User.findOne({
        where: where
    });
    return user;
}

const deletar = async function(id) {
    return await User.destroy({ where: { id: id } });
}

module.exports = {
    criar: criar,
    atualizar: atualizar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    encontrarUmPorWhere: encontrarUmPorWhere,
    deletar: deletar
}