const { CategoriaDataSource, ProductoDataSource } = require('../datasources');

module.exports = (clienteBD, log) => {
    const { pg } = clienteBD;
    return {
        categoria: new CategoriaDataSource(pg, log),
        producto: new ProductoDataSource(pg, log),
    };
};
