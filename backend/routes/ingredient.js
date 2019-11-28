const router = require('express').Router()
let Ingredient = require('../models/ingredient.model')
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

router.route('/getIngredients').get((req,res) => {

    Ingredient.findOne()
    .then(ingredient => res.json(ingredient))
    .catch(err => res.status(400).json('Error: ' + err))

})

module.exports = router;