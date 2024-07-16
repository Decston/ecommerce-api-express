const validatorMessage = function(atributo) {
    return `A propriedade ${atributo} e invalido!`;
}

const notExists = function(atributo) {
    return `A propriedade ${atributo} nao existe!`;
}

module.exports = {
    validatorMessage: validatorMessage,
    notExists: notExists
}