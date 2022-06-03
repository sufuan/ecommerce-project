const express = require('express');
const { registerController, getalluser, loginController } = require('../controller/usre.controller');
const router = express.Router()


router.post('/signup', registerController)

router.post('/signin', loginController)

router.get('/', getalluser)

module.exports = router