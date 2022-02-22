const express = require('express');

const router = express.Router();
const productsApi = require("../../../controllers/api/v1/products_api");

//routes for listing down all producs
router.get('/', productsApi.index);
//routes for deleting specific product by id
router.delete('/:id', productsApi.delete);
//routes for creating new product
router.post('/create', productsApi.create);
//routes for updating product
router.put('/:id/update_quantity', productsApi.update);



module.exports = router;