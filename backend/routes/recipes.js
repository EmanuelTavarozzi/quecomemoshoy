const router = require('express').Router()
let Recipe = require('../models/recipes.model')
var mongoose = require('mongoose');


router.route('/landingRecipes').get((req,res) =>{
    Recipe.find().sort({likes: -1}).limit(3)
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req,res) =>{
    Recipe.find({_id: req.params.id})
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/searchRecipe').post((req,res) =>{

    if (name == ''){
        Recipe.find({ingredients: { $all: ingredients}})    
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
    }

    else if (ingredients == ''){
        Recipe.find({ name: {  $regex: '.*' + req.body.name.toLowerCase() + '.*' }})    
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
    }
    else{
    //Ingredientes y nombre
    Recipe.find({ingredients: { $all: ingredients}, name: {  $regex: '.*' + req.body.name.toLowerCase() + '.*' }})    
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
    }
})
 
router.route('/addRecipe').post((req,res) => {

     const newRecipe = new Recipe({ // Creo nueva receta
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        steps: req.body.steps
    })

    newRecipe.save()
        .then(() => res.json('Receta generada!'))
        .catch(err => res.json('Ha habido un error: ' + err)) 
})

module.exports = router;