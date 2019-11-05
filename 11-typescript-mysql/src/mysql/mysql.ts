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
        return this._instance || (this._instance = new this());
    }

    static ejecutarQuery( query: string, callback: Function ) {
        // Como estamos aplicando el patrón Singleton, debemos de hacer referencia a la instancia ya que las propiedades no son estáticas
        this.instance.conn.query(query, (err, results: Object[], fields) => {
            if(err) {
                console.log('Error en query');
                console.log(err);
                
                return callback(err);
            }

            if(results.length === 0) {
                callback('El registro solicitado no existe');
            }
            else {
                callback(null, results);
            }

            
        });
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