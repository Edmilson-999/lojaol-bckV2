const express = require('express');
const loginController  = require('../controllers/login')
const singUpController  = require('../controllers/singup')

const router = express.Router();

router.get('/loginUser', userController.loginUser); // Rotas de login

router.post('/login', loginController);

router.post('/singup', singUpController);


router.get('/logout', userController.logout); // Rotas logout

module.exports = router