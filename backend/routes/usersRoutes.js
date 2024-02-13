// routes/learnings-routes.js
import express from "express";
import * as usersControllers from '../controllers/users-controllers.js';
import {check}  from 'express-validator';

const router = express.Router();

router.get('/',usersControllers.getUsers);

//router.get('/user/:uid');

router.post('/signup',[
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min:6})  
], usersControllers.signup);
router.post('/login', usersControllers.login);



export default router;
