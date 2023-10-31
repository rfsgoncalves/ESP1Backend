//oferece funções assíncronas
import mysql from 'mysql2/promise';

export default async function Conectar(){

    //guardar na sessão global do javascrip um pool de conexões para
    //obter conexões com o banco de dados
    if (global.poolConexoes){
        return await global.poolConexoes.getConnection();
    }

    const pool = await mysql.createPool({
        host: '129.146.68.51',
        user: 'aluno0-p1engsoft',
        password:'oQZN0YAnietaiRU73JBn',
        database: 'backendaluno0-p1engsoft',
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10, 
        idleTimeout: 60000, 
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0
      });

    global.poolConexoes = pool;
    return await pool.getConnection();
}