require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const {getProduct, postProduct, editProduct, deleteProduct} = require('./controller')

app.use(express.json());


const url = '/api/products'

app.get( url, getProduct)
app.post(url, postProduct)
app.put(`${url}/:product_name`, editProduct)
app.delete(`${url}/:product_name`, deleteProduct)


massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db);
    console.log('Database Connected :)')
})

app.listen(process.env.SERVER_PORT, () => console.log('listening on port 4000'))