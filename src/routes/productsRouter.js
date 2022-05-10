const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

/*  Ruta para listar productos   */
router.get('/', productsController.getAll);
/*  Ruta parametrizada   */
router.get('/detalle/:id', productsController.getOne)



module.exports = router;