const { ProductoService } = require('../../services');
const errors = require('../../errors');

module.exports = async (parent, args, context, info) => {
    try {
        context.log.info('Inicio del resolver de Mutation.insertarProducto.');
        const { input } = args;
        const producto = new ProductoService(context);
        const productoInsertado = await producto.insertarProducto(
            input.producto,
        );
        return productoInsertado;
    } catch (error) {
        if (error instanceof errors.GeneralError) {
            context.log.error(error?.toString());
            throw error;
        } else {
            context.log.error(error);
            throw new errors.GeneralError(
                {},
                'Error interno del servidor.',
                {},
                'ERROR_INTERNO_DEL_SERVIDOR',
            );
        }
    } finally {
        context.log.info('Fin del resolver de Mutation.insertarProducto.');
    }
};
