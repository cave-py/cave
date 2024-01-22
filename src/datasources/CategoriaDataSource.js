const RootDataSource =  require('./RootDataSource');

class CategoriaDataSource extends RootDataSource {
    constructor(clientePg, log) {
        super(clientePg, log)
    }

    async obtenerCategoriaPorId(idCategoria) {
        try {
            this.log.info('Inicio de la función -> CategoriaDataSource.obtenerCategoriaPorId()')
            const respuestaBD = await this.clientePg.query(
                `SELECT id, nombre, fecha_insercion "fechaInsercion" FROM producto.categorias WHERE id = $1`,
                [Number(idCategoria)]
            );
            this.log.debug('Categoria obtenida: ' + JSON.stringify(respuestaBD.rows))
            return respuestaBD.rows[0];
        } catch (error) {
            this.log.error(error)
        } finally {
            this.log.info('Fin de la función -> CategoriaDataSource.obtenerCategoriaPorId()')
        }
    }


    async insertarCategoria(nombre) {
        try {
            this.log.info('Inicio de la función -> CategoriaDataSource.insertarCategoria()')
            const respuestaBD = await this.clientePg.query( 
                `INSERT INTO producto.categorias (nombre) VALUES ($1) RETURNING id`,
                [nombre]
            );
            this.log.debug('Categoria insertada: ' + JSON.stringify(respuestaBD.rows))
            return "Se ha insertado la categoria N° " + respuestaBD.rows[0].id;
        } catch (error) {
            this.log.error(error)
        } finally {
            this.log.info('Fin de la función -> CategoriaDataSource.insertarCategoria()')
        }        
    }


    async obtenerListadoDeCategorias() {
        try {
            this.log.info('Inicio de la función -> CategoriaDataSource.obtenerListadoDeCategorias()')
            const respuestaBD = await this.clientePg.query(
                `SELECT id, nombre, fecha_insercion "fechaInsercion" FROM producto.categorias`,
            );
            this.log.debug('Listadode categorias: ' + JSON.stringify(respuestaBD.rows))
            return respuestaBD.rows;
        } catch (error) {
            this.log.error(error)
        } finally {
            this.log.info('Fin de la función -> CategoriaDataSource.obtenerListadoDeCategorias()')
        }        
    }
}


module.exports = CategoriaDataSource