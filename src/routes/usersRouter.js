const express = require('express');
const router = express.Router();
const usersRouter = require('../controllers/usersControllers')

router.get('/inicioSesion', usersRouter.login);
router.get('/registrarse', usersRouter.register);

module.exports = router;