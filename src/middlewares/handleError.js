function montarErro(error) {
    if(error.errors) {
        return error.errors.map(err => err.msg);
    }
    if(error) {
        return [error.message];
    }

    return ["Erro encontrado, por favor tente mais tarde!"];
}

const handleError = function(error, req, res, next) {
    const errors = montarErro(error);

    res.status(error.status || 500);
    res.json(errors);
}

module.exports = handleError;