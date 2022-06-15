const router = require('express').Router();
const userController = require('../controllers/users.controller');

router.get('*', userController.allUsers);

module.exports = router;
