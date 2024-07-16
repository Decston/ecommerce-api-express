const userRepository = require('../repositories/user');
const createError = require('http-errors');
const bcrypt = require('bcrypt');
require('dotenv').config();

const criar = async function(usuario) {
    const userExiste = await userRepository.encontrarUmPorWhere({ nm_login: usuario.login });

    if(userExiste) {
        return createError(409, "User existente!");
    }

    usuario.password = await bcrypt.hash(usuario.password, ~~process.env.SALT);
    const userCriado = await userRepository.criar(usuario);
    return userCriado;
}

const atualizar = async function(usuario, id) {
    const userExiste = await userRepository.encontrarPorId(id);

    if(!userExiste) {
        return createError(409, "User não existe!");
    }

    await userRepository.atualizar(usuario, id);

    return await userRepository.encontrarPorId(id);
}

const encontrarTodos = async function() {
    const users = await userRepository.encontrarTodos();
    return users;
}

const encontrarPorId = async function(id) {
    const user = await userRepository.encontrarPorId(id);

    if(!user) {
        return createError(404, "User nao existe!");
    }
    
    return user;
}

const deletar = async function(id) {
    const user = await userRepository.encontrarPorId(id);

    if(!user) {
        return createError(404, "User nao existe!");
    }

    await userRepository.deletar(id);
    
    return user;
}

module.exports = {
    criar: criar,
    atualizar: atualizar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    deletar: deletar
}