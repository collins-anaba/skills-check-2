require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();

app.use(express.json());


const url = '/api/inventory'


massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db);
    console.log('Database Connected :)')
})

app.listen(process.env.SERVER_PORT, () => console.log('listening on port 4000'))