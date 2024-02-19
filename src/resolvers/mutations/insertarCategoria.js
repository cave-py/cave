const { CategoriaService } = require('../../services');

module.exports = async (parent, args, context, info) => {
    try {
        context.log.info('Inicio del resolver de Mutation.insertarCategoria.');
        const { input } = args;
        const categoria = new CategoriaService(context);
        const categoriaInsertada = categoria.insertarCategoria(
            input.categoria.nombre,
        );
        return categoriaInsertada;
    } catch (error) {
        context.log.error(error);
    } finally {
        context.log.info('Fin del resolver de Mutation.insertarCategoria.');
    }
};
