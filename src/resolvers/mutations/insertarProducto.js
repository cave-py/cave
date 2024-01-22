const { ProductoService } = require('../../services')

module.exports = async (parent, args, context, info) => {
    try {
        context.log.info('Inicio del resolver de Mutation.insertarProducto.')
        const { input } = args;
        const producto = new ProductoService(context)
        const productoInsertado = producto.insertarProducto(input.producto)
        return productoInsertado
    } catch (error) {
        context.log.error(error)
    } finally {
        context.log.info('Fin del resolver de Mutation.insertarProducto.')
    }
}
