const router = require('express').Router()
let Contact = require('../models/contact.model')
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

router.route('/addMessage').post((req,res) => {

    const newMessage = new Contact({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        mail: req.body.mail,
        comments: req.body.comments
    })

   newMessage.save().then((contact) => {
       return res.json("Mensaje guardado")
   }).catch(err => res.json('Ha habido un error: ' + err))

})

module.exports = router;