const { CategoriaService } = require('../../services')

module.exports = async (parent, args, context, info) => {
    try {
        context.log.info('Inicio del resolver de Query.categoria.')
        const { input } = args;
        const categoria = new CategoriaService(context)
        const categoriaEncontrada = categoria.obtenerCategoriaPorId(input.id)
        return categoriaEncontrada
    } catch (error) {
        context.log.error(error)
    } finally {
        context.log.info('Fin del resolver de Query.categoria.')
    }
}