const express = require('express');
const controller = require('../controllers/account');
const authMiddleware = require('../middleware/auth');

const router = express.Router();
router.get('/account', authMiddleware, controller.getAll);
router.get('/account/:id', authMiddleware, controller.getById);
router.post('/account', authMiddleware, controller.insert);
router.put('/account/:id', authMiddleware, controller.update);
router.delete('/account/:id', authMiddleware, controller.remove);

module.exports = router;
