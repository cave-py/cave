module.exports = {
    categoria: async (parent, args, context, info) => {
        try {
            context.log.info(
                'Inicia el resolver de la propiedad Producto.categoria.',
            );
            const { idCategoria } = parent;
            const categoriaPorId =
                await context.datasources.categoria.obtenerCategoriaPorId(
                    idCategoria,
                );
            return categoriaPorId;
        } catch (error) {
            context.log.error(error);
        } finally {
            context.log.info(
                'Finaliza el resolver de la propiedad Producto.categoria.',
            );
        }
    },
};
