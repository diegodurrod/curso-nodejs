import express = require('express');
import path = require('path');

export default class Server {
    private app: express.Application;
    private port: number;

    constructor(puerto: number) {
        this.port = puerto;
        this.app = express();
    }

    static init(puerto: number) {
        return new Server(puerto);
    }

    private publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }

    public start(callback: Function) {
        this.app.listen(this.port, callback());
        this.publicFolder();
    }
}