const express = require('express');
const router = express.Router();
const userController=require('../controller/users_controller');
//console.log("router load");
router.get('/profile',userController.profile);
//outer.use('/users',require('./users'));
module.exports = router;