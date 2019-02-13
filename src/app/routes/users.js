const express = require('express');
const controller = require('../controllers/users');
const authMiddleware = require('../middleware/auth');

const router = express.Router();
router.get('/users', controller.getAll);
router.get('/users/:id', controller.getById);
router.post('/users', controller.insert);
router.put('/users/:id', authMiddleware, controller.update);
router.delete('/users/:id', authMiddleware, controller.remove);

module.exports = router;
