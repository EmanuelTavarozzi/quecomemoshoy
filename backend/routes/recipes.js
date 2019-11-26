const router = require('express').Router()
let Recipe = require('../models/recipes.model')
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);


router.route('/landingRecipes').get((req,res) =>{
    Recipe.find().sort({likes: -1}).limit(3)
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/getRecipesByIds').post((req, res) => {
    Recipe.find({'_id': { $in: req.body.ids}})
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/deleteRecipeById').post((req,res)=> {
    // todo arreglar si receta no existe
    // eliminar de favoritos de otros usuarios
    
    Recipe.deleteOne({'_id': req.body.id})
    .then(recipe => {
        if (!recipe){
            res.status(200).json("receta inexistente")
        }
        res.json("Receta eliminada con exito")
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/getRecipesByUserMail').post((req, res) => {
    Recipe.find({'usermail': req.body.usermail})
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
        steps: req.body.steps,
        usermail: req.body.usermail
    })

    newRecipe.save()
        .then((recipe) => {
            return res.json({
                message: 'Receta generada!',
                recipeid: recipe._id
        })
        }
            )
        .catch(err => res.json('Ha habido un error: ' + err)) 
})

router.route('/likeRecipe').post((req,res) => {

    Recipe.findByIdAndUpdate(req.body._id, { $inc: { likes: 1 }})
    .then(() => res.json('Receta likeada!'))
    .catch(err => res.json('Ha habido un error: ' + err)) 
   
})

module.exports = router;