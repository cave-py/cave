const { CategoriaService } = require('../../services')

module.exports = async (parent, args, context, info) => {
    try {
        context.log.info('Inicio del resolver de Query.categorias.')
        const categoria = new CategoriaService(context)
        const listadoDeCategorias = categoria.listadoDeCategorias()
        return listadoDeCategorias
    } catch (error) {
        context.log.error(error)
    } finally {
        context.log.info('Fin del resolver de Query.categorias.')
    }
}