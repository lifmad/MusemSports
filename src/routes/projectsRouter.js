const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

/*  Ruta para listar productos   */
router.get('/', projectsController.getAll);
/*  Ruta parametrizada   */
router.get('/detail/:id', projectsController.getOne);



module.exports = router;