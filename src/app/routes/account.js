const express = require('express');
const controller = require('../controllers/account');
const authMiddleware = require('../middleware/auth');

const router = express.Router();
router.use(authMiddleware);
router.get('/account', controller.getAll);
router.get('/account/:id', controller.getById);
router.post('/account', controller.insert);
router.put('/account/:id', controller.update);
router.delete('/account/:id', controller.remove);

module.exports = router;
