"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
        console.log('Clase MySQL inicializada');
        this.conn = mysql.createConnection({
            host: 'remotemysql.com',
            user: 'SDaP2MNIpZ',
            password: '1J6AaaRv2P',
            database: 'SDaP2MNIpZ'
        });
        this.conectarDB();
    }
    conectarDB() {
        this.conn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos online!');
        });
    }
}
exports.default = MySQL;
