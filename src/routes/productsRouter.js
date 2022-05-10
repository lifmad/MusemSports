const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

/*  Ruta para listar productos   */
router.get('/detalle', productsController.detail);
/*  Ruta parametrizada   */
router.get('/carrito', productsController.cart)



module.exports = router;