const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name:{type:String},
    description:{type:String},
    ingredients:{type:Array},
    steps:{type:String},
}, {
    timestamps: true,
})


const Recipe = mongoose.model('Recipe', recipeSchema) // Asigno el esquema creado a la constante

module.exports = Recipe