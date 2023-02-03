// Aqui va todo lo refrente a  MIDDLEWARES
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routerApi = require('./routes');


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) =>{
    res.json({message: "Bienvenido a mi servidor"});
});

routerApi(app);

module.exports = app;