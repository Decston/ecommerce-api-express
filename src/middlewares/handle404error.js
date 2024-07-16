const handle404Error = function(req, res) {
    res.status(404);
    res.send(['Nao Encontrado']);
} 

module.exports = handle404Error;