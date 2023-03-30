const express = require('express')

const { getAll,create,updateProd,deleteProd} = require ('../controllers/controllers');

const route = express.Router();


route.get('/products', getAll);
route.post('/createProd', create);
route.put('/products/:id',updateProd);
route.delete('/products/:id',deleteProd)



module.exports = route