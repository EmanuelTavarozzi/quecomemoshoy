const router = require('express').Router() // Necesario para crear el route
let User = require('../models/user.model') // Requiero el model creado


router.route('/').get((req, res) =>{ // Responde a la solicitud /users/
    User.find() // Devuelve una promesa
        .then(users => res.json(users)) // Retorna usuarios como json
        .catch(err => res.status(400).json('Error: '+ err))
})


router.route('/add').post((req,res) => {
    const username = req.body.username
    const newUser = new User({username})

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(() => res.json('There was an error!'))
})

module.exports = router; // Solo exporto el router para poder usarlo en server.js