const express = require('express');
const controller = require('../controllers/AuthController');
const router = express.Router();

router.post('/login', controller.LOGIN);
router.get('/verify', controller.VERIFY);
router.post('/logout', controller.LOGOUT);

module.exports = router;
