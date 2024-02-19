const { ProductoService } = require('../../services');

module.exports = async (parent, args, context, info) => {
    try {
        context.log.info('Inicio del resolver de Query.categorias.');
        const producto = new ProductoService(context);
        const listadoDeProductos = producto.listadoDeProductos();
        return listadoDeProductos;
    } catch (error) {
        context.log.error(error);
    } finally {
        context.log.info('Fin del resolver de Query.categorias.');
    }
};
