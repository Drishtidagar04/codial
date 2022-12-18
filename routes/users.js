const express = require('express');
const passport= require("passport");
const router = express.Router();
const userController=require('../controller/users_controller');
//console.log("router load");
router.get('/profile',userController.profile);

router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn); 
router.post('/create',userController.create);
router.post('/create-session',passport.authenticate(
    'local',
       {failureRedirect:'/users/sign-in'},
 ), userController.createSession);



router.get('/sign-out',userController.destroySession);


module.exports = router;