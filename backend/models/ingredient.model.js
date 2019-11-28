const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const ingredientSchema = new Schema({
    ingredientList: {type:Array}
})

const Ingredient = mongoose.model('ingredient', ingredientSchema) 

module.exports = Ingredient