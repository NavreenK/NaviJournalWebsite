import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "../logger/logger";
import recipes from './recipesDB';
const Recipe = require('./model');
const router = express.Router();

class Recipes {

    public express: express.Application;
    public logger: Logger;

    // array to hold all recipes
    public recipes = recipes;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.recipes = recipes;
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        // request to get all the recipes
        this.express.get("/recipes", async (req, res, next) => {
            Recipe.find({}).then(function(recipes: any){
                res.send(recipes).status(200);
            }).catch(next);
        });
    }
}

export default new Recipes().express;