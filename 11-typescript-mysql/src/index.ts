import Server from './server/server'
import router from './router/router';
import MySQL from './mysql/mysql';

const server = Server.init(3000);
server.app.use(router);

// Si queremos varias conexiones
//const mysql = new MySQL();

// Patrón Singleton
MySQL.instance;

server.start(() => {
    console.log('Servidor corriendo en el puerto 3000');
})