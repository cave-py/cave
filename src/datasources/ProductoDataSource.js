const RootDataSource = require('./RootDataSource');

class ProductoDataSource extends RootDataSource {
    constructor(clientePg, log) {
        super(clientePg, log);
    }

    async insertarProducto({ nombre, precio, idCategoria }) {
        try {
            this.log.info(
                'Inicio de la función -> ProductoDataSource.insertarProducto()',
            );
            const respuestaBD = await this.clientePg.query(
                `INSERT INTO producto.productos (nombre, precio, id_categoria) VALUES ($1, $2, $3) RETURNING id`,
                [nombre, precio, idCategoria],
            );
            this.log.debug(
                'Producto insertado: ' + JSON.stringify(respuestaBD.rows),
            );
            return 'Se ha insertado el producto N° ' + respuestaBD.rows[0].id;
        } catch (error) {
            this.log.error(error);
        } finally {
            this.log.info(
                'Fin de la función -> ProductoDataSource.insertarProducto()',
            );
        }
    }

    async obtenerListadoDeProductos() {
        try {
            this.log.info(
                'Inicio de la función -> ProductoDataSource.insertarProducto()',
            );
            const respuestaBD = await this.clientePg.query(
                `SELECT id, nombre, precio, id_categoria as "idCategoria", fecha_insercion as "fechaInsercion", fecha_actualizacion as "fechaActualizacion" FROM producto.productos`,
            );
            this.log.debug(
                'Productos en BD: ' + JSON.stringify(respuestaBD.rows),
            );
            return respuestaBD.rows;
        } catch (error) {
            this.log.error(error);
        } finally {
            this.log.info(
                'Fin de la función -> ProductoDataSource.insertarProducto()',
            );
        }
    }

    async obtenerProductoPorId(idProducto) {
        try {
            this.log.info(
                'Inicio de la función -> ProductoDataSource.obtenerProductoPorId()',
            );
            const respuestaBD = await this.clientePg.query(
                `SELECT id, nombre, precio, id_categoria as "idCategoria", fecha_insercion as "fechaInsercion", fecha_actualizacion as "fechaActualizacion" FROM producto.productos WHERE id = $1`,
                [idProducto],
            );
            this.log.debug(
                'Producto en BD: ' + JSON.stringify(respuestaBD.rows),
            );
            return respuestaBD.rows[0];
        } catch (error) {
            this.log.error(error);
        } finally {
            this.log.info(
                'Fin de la función -> ProductoDataSource.obtenerProductoPorId()',
            );
        }
    }
}

module.exports = ProductoDataSource;
