
import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "./logger/logger";
import Routes from "./routes/routes";
import uri from './env';

const mongoose = require('mongoose');
mongoose.connect(uri);
let database = mongoose.connection;

database.on('error', (error: any) => {
    console.log(error)
})

database.once('connected', async() => {
    console.log('Database Connected');

    //console.log(await database.collection)
    //console.log(await database.collection("recipes").find({}))
})

class App {

    public express: express.Application;
    public logger: Logger;


    // array to hold users
    public users: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [];
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        this.express.get("/", (req, res, next) => {
            res.send("Typescript App works!!");
        });

        // user route
        this.express.use("/api", Routes);

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }
}

export default new App().express;