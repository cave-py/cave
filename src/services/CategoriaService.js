class CategoriaService {
    constructor({ datasources, log }) {
        this.datasource = datasources;
        this.log = log;
    }

    async obtenerCategoriaPorId(idCategoria) {
        try {
            this.log.info(
                'Inicio de la función -> CategoriaService.obtenerCategoriaPorId()',
            );
            const categoriaPorId =
                await this.datasource.categoria.obtenerCategoriaPorId(
                    Number(idCategoria),
                );
            return categoriaPorId;
        } catch (error) {
            this.log.error(error);
        } finally {
            this.log.info(
                'Fin de la función -> CategoriaService.obtenerCategoriaPorId()',
            );
        }
    }

    async insertarCategoria(nombre) {
        try {
            this.log.info(
                'Inicio de la función -> CategoriaService.insertarCategoria()',
            );
            const categoriaInsertada =
                await this.datasource.categoria.insertarCategoria(nombre);
            return categoriaInsertada;
        } catch (error) {
            this.log.error(error);
        } finally {
            this.log.info(
                'Fin de la función -> CategoriaService.insertarCategoria()',
            );
        }
    }

    async listadoDeCategorias() {
        try {
            this.log.info(
                'Inicio de la función -> CategoriaService.listadoDeCategorias()',
            );
            const categorias =
                await this.datasource.categoria.obtenerListadoDeCategorias();
            return categorias;
        } catch (error) {
            this.log.error(error);
        } finally {
            this.log.info(
                'Fin de la función -> CategoriaService.listadoDeCategorias()',
            );
        }
    }
}

module.exports = CategoriaService;
