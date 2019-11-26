const mongoose = require ('mongoose')


const Schema = mongoose.Schema

const contactSchema = new Schema({
    _id:        {type:Schema.Types.ObjectId},
    name:       {type:String},
    mail:       {type:String},
    comments:   {type:String},
}, {
    timestamps: true,
} )


const Contact = mongoose.model('Contact', contactSchema) 

module.exports = Contact