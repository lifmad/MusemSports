const express = require('express');
const usersControllers = require('../controllers/usersControllers');
const router = express.Router();
const usersRouter = require('../controllers/usersControllers');

/*     GET - Renderiza vista Login      */
router.get('/inicioSesion', usersRouter.login);
/*     GET - Renderiza vista Register   */
router.get('/registrarse', usersRouter.register);
/*     POST - Crea un nuevo usuario     */
router.post('/registro', usersControllers.processRegister)

module.exports = router;