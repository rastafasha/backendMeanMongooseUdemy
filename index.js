require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');

//crear server de express
const app = express();

//cors
app.use(cors());

//lectura y parseo del body
app.use(express.json());

//db
dbConnection();

//middleware


//rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));


app.listen(process.env.PORT, () => {
    console.log('Servidor en puerto: ' + process.env.PORT);
});