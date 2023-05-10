
const mongoose = require('mongoose');
import { ObjectId } from "mongodb";
const Schema = mongoose.Schema;

// create student schema & model
const RecipeSchema = new Schema({
    id: {
        type: ObjectId
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    recipeYield: {
        type: String,
    },
    image : {
        type: String
    },
    ingredients: {
        type: Array
    },
    instructions: {
        type: Array
    }
});


const Recipe = mongoose.model('recipe',RecipeSchema);

module.exports = Recipe;