const router = require('express').Router()
let Recipe = require('../models/recipes.model')


router.route('/').get((req,res) =>{
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
})


router.route('/add').post((req,res) => {
    const name = req.body.name
    const description = req.body.description
    const ingredients = req.body.ingredients
    const steps = req.body.steps

    const newRecipe = new Recipe({ // Creo nueva receta
        name,description,ingredients,steps
    })

    newRecipe.save()
        .then(() => res.json('Receta generada!'))
        .catch(err => res.json('Ha habido un error: ' + err))
})

module.exports = router;