const express = require('express');
const controller = require('../controllers/users');
const authMiddleware = require('../middleware/auth');

const router = express.Router();
router.get('/users', controller.getAll);
router.get('/users/:id', controller.getById);
router.post('/users', controller.insert);
router.put('/users/:id', controller.update).use(authMiddleware);
router.delete('/users/:id', controller.remove).use(authMiddleware);

module.exports = router;
