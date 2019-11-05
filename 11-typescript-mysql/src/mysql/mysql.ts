import mysql = require('mysql');

export default class MySQL {
    private static _instance: MySQL;

    conn: mysql.Connection;
    conectado: boolean = false;

    constructor() {
        console.log('Clase MySQL inicializada');

        this.conn = mysql.createConnection({
            host: 'remotemysql.com',
            user: 'SDaP2MNIpZ',
            password: '1J6AaaRv2P',
            database: 'SDaP2MNIpZ'
        });

        this.conectarDB();        
    }

    public static get instance() {
        return this._instance;
    }

    private conectarDB() {
        this.conn.connect((err: mysql.MysqlError) => {
            if(err) {
                console.log(err.message);
                return;
            }

            this.conectado = true;
            console.log('Base de datos online!');
        })
    }
}