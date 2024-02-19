const erros = require('../errors');

class ProductoService {
    constructor({ datasources, log }) {
        this.datasource = datasources;
        this.log = log;
    }

    async insertarProducto(producto) {
        try {
            this.log.info(
                'Inicio de la función -> ProductoService.insertarProducto()',
            );
            const { nombre, precio, categoria } = producto;
            if (!categoria.hasOwnProperty('id')) {
                throw 'CATEGORIA_NO_ESPECIFICADA';
            }

            const existeCategoria =
                await this.datasource.categoria.obtenerCategoriaPorId(
                    Number(categoria.id),
                );
            if (Object.keys(existeCategoria).length === 0) {
                throw 'CATEGORIA_INEXISTENTE';
            } else {
                const datosParaInsertar = {
                    nombre,
                    precio,
                    idCategoria: Number(categoria.id),
                };
                const productoInsertado =
                    await this.datasource.producto.insertarProducto(
                        datosParaInsertar,
                    );
                return productoInsertado;
            }
        } catch (error) {
            this.log.error(error);
            let mensaje = '',
                codigo = '',
                detalles = {},
                extensiones = {};
            if (
                typeof error === 'string' &&
                error === 'CATEGORIA_NO_ESPECIFICADA'
            ) {
                mensaje = 'No se ha especificado una categoría.';
                codigo = 'CATEGORIA_NO_ESPECIFICADA';
                detalles = {};
                extensiones = { producto };
            }

            if (
                typeof error === 'string' &&
                error === 'CATEGORIA_INEXISTENTE'
            ) {
                mensaje = 'El dato de categoria enviado no existe.';
                codigo = 'CATEGORIA_INEXISTENTE';
                detalles = {};
                extensiones = { producto };
            }

            if (typeof error != 'string') {
                mensaje = 'Se ha producido un error inesperado.';
                codigo = 'ERROR_INTERNO';
                detalles = { error };
                extensiones = {};
            }
            throw new erros.GeneralError(
                detalles,
                mensaje,
                extensiones,
                codigo,
            );
        } finally {
            this.log.info(
                'Fin de la función -> ProductoService.insertarProducto()',
            );
        }
    }

    async listadoDeProductos() {
        try {
            this.log.info(
                'Inicio de la función -> ProductoService.listadoDeProductos()',
            );
            const productos =
                await this.datasource.producto.obtenerListadoDeProductos();
            return productos;
        } catch (error) {
            this.log.error(error);
        } finally {
            this.log.info(
                'Fin de la función -> ProductoService.listadoDeProductos()',
            );
        }
    }

    async productoPorId(id) {
        try {
            this.log.info(
                'Inicio de la función -> ProductoService.productoPorId()',
            );
            const productoPorId =
                await this.datasource.producto.obtenerProductoPorId(Number(id));
            return productoPorId;
        } catch (error) {
            this.log.error(error);
        } finally {
            this.log.info(
                'Fin de la función -> ProductoService.productoPorId()',
            );
        }
    }
}

module.exports = ProductoService;
