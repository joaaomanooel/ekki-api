const express = require('express');
const controller = require('../controllers/auth');

const router = express.Router();
router.post('/auth', controller.authenticate);
router.post('/forgot_password', controller.forgotPassword);
router.post('/reset_password', controller.resetPassword);

module.exports = router;
