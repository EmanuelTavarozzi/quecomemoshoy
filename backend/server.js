const express =require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const recipesRouter = require('./routes/recipes')
const userRouter = require('./routes/users')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// MongoDB Connection (uses .env file -> ATLAS_URI define)
const uri = process.env.ATLAS_URI //
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}) 

const connection = mongoose.connection
connection.once('open',() => {
    console.log("Mongo is on fire")
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})

app.get('/', function (req, res) {
    res.send('Bienvenido a mi aplicación con Express!');
});

app.use('/recipes', recipesRouter)
app.use('/users', userRouter)