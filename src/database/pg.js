const { Pool } = require('pg');


module.exports = async () => {
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT),
    })
 
    pool.on('error', (err, client) => {
      console.error('Error inseperado al conectar el cliente.', err)
      process.exit(-1)
    })
     
    const clientePg = await pool.connect()

    return clientePg;
}