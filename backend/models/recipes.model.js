const mongoose = require ('mongoose')


const Schema = mongoose.Schema

const recipeSchema = new Schema({
    _id:        {type:Schema.Types.ObjectId},
    name:       {type:String},
    description:{type:String},
    category:   {type:String},
    ingredients:{type:Array},
    likes:      {type:Number},
    steps:      {type:Array},
    usermail:   {type:String},
    imageurl:      {type:String},
    recomendation: {type:String},
}, {
    timestamps: true,
} )


const Recipe = mongoose.model('Recipe', recipeSchema) // Asigno el esquema creado a la constante

module.exports = Recipe