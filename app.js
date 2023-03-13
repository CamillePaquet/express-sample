const express = require('express')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv');
dotenv.config();

const routes = require('./src/routes/init');

// const routes = require('./src/routes/v1/users');

console.log(routes);

app.use(express.json());
app.use(cors())                                 // Activation de CORS
app.use(morgan('tiny'))                         // Activation de Morgan
app.use(express.json())                         // Activation du raw (json)

app.use('/v1', routes); //to use the routes

app.listen(3000, () => {  console.log('Serveur lancé')})