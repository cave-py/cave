

class ProductoService {
    constructor({ datasources, log }) {
        this.datasource = datasources;
        this.log = log;
    }

    async insertarProducto(producto) {
        try {
            this.log.info('Inicio de la función -> ProductoService.insertarProducto()')
            const { nombre, precio, categoria } = producto;
            const datosParaInsertar = { nombre, precio, idCategoria: Number(categoria.id)}
            const categoriaInsertada = await this.datasource.producto.insertarProducto(datosParaInsertar)
            return categoriaInsertada
        } catch (error) {
            this.log.error(error)
        } finally {
            this.log.info('Fin de la función -> ProductoService.insertarProducto()')
        }
    }
}


module.exports = ProductoService;