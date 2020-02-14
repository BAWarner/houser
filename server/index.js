const express = require('express');
const app = express();
const session = require('express-session');
require('dotenv').config();
let { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;
const massive = require('massive');

app.use(express.json());

massive(CONNECTION_STRING)
.then( db => {
    app.set('db', db);
    console.log('Party on, Garth!');
} )
.catch( err => console.log('Could not connect to the database due to:', err));

app.listen(SERVER_PORT, () => console.log('Party on, Wayne!') );

let controller = require('./controller');
let { getHousesAll, addHouse, deleteHouse } = controller;

app.get('/api/houses', getHousesAll);
app.post('/api/houses', addHouse);
app.delete('/api/houses/:id', deleteHouse);