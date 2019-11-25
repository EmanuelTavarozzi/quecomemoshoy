const router = require('express').Router()
let Recipe = require('../models/recipes.model')
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);


router.route('/landingRecipes').get((req,res) =>{
    Recipe.find().sort({likes: -1}).limit(3)
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req,res) =>{
    Recipe.findOne({_id: req.params.id})
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/searchRecipe').post((req,res) =>{

    if (req.body.name == '' || !req.body.name ){
        Recipe.find({ingredients: { $all: req.body.ingredients}})    
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
    }

    else if (!req.body.ingredients || req.body.ingredients.length == 0){
        Recipe.find({ name: {  $regex: '.*' + req.body.name.toLowerCase() + '.*' }})    
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
    }
    else{
    //Ingredientes y nombre
    Recipe.find({ingredients: { $all: req.body.ingredients}, name: {  $regex: '.*' + req.body.name.toLowerCase() + '.*' }})    
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
    }
    //todo que no venga nada
})
 
router.route('/addRecipe').post((req,res) => {

    // to do a lowercase, nombres e ingredientes

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

router.route('/likeRecipe').post((req,res) => {

    Recipe.findByIdAndUpdate(req.body._id, { $inc: { likes: 1 }})
    .then(() => res.json('Receta likeada!'))
    .catch(err => res.json('Ha habido un error: ' + err)) 
   
})

module.exports = router;