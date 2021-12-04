require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');

//crear server de express
const app = express();

//cors
app.use(cors());

//db
dbConnection();

//middleware


//rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Servidor en puerto: ' + process.env.PORT);
})