const mongoose = require('mongoose')

const Schema = mongoose.Schema


const userSchema = new Schema({
    username: {type:String},
    password: {type:String},
    name:   {type:String},
    lastname:        {type:String},
    mail:            {type:String},
    recipes:         {type:Array},
    favoriteRecipes: {type:Array},
    isNustricionist: {type:Boolean}

})


const User = mongoose.model('User',userSchema)

module.exports = User