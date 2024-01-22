const { pgClient } = require('../database');
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('../schema');
const resolvers = require('../resolvers');
const inicializarDatasources = require('./inicializarDatasources');

function crearServidor() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    return server;
}

class Servidor {
    constructor(log, port) {
        this.logger = log;
        this.server = crearServidor();
        this.port = port || 5000;
    }

    async start() {
        this.logger.info('Conectando el servidor ...');
        const pg = await pgClient();
        const clientes = { pg };
        // const prismaClient = await clientes.prismaClient;
        // const mongoClient = await clientes.mongoClient;
        const datasources = inicializarDatasources(clientes, this.logger);
        const { url } = await startStandaloneServer(this.server, {
            context: ({ req, res }) => ({
                req,
                log: this.logger,
                datasources,
            }),
            listen: { port: this.port },
        });

        this.url = url;
        this.logger.info(`🚀 Servidor listo en: ${this.url}`);
    }
}

module.exports = Servidor;
