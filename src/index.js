const dotenv = require('dotenv');
dotenv.config('.././.env');
const { log } = require('./common');
const { Servidor } = require('./server');

async function inicializar() {
    log.info('Iniciando servidor...');
    try {
        const server = new Servidor(log, Number(process.env.PORT));
        await server.start();
    } catch (error) {
        log.error(error);
    }
}

inicializar();
