const router = require('express').Router() // Necesario para crear el route
let User = require('../models/user.model') // Requiero el model creado


router.route('/login').post((req, res) =>{ 
    User.findOne({mail: req.body.mail, password: req.body.password}) 
        .then(user => {
            if(user){
                res.json(user)
            }
            else{
                res.json('Usuario no encontrado')
            }
        })               
        .catch(err => res.status(400).json('Error: '+ err))
    }
)


router.route('/add').post((req,res) => {         

    User.findOne({mail: req.body.mail}) 
        .then(user => {
            if (user){
                res.status(200).json("Usuario existente")
            }
            else{
                const newUser = new User({                    
                    mail: req.body.mail,
                    password: req.body.password,         
                    name: req.body.name,            
                    lastname: req.body.lastname,          
                     
                })
                newUser.save()
                .then(() => res.json('Usuario Agregado'))
                .catch(() => res.json('Error'))    
            }
        })
        .catch(err => res.status(400).json('Error: '+ err))
    }
)

module.exports = router; 