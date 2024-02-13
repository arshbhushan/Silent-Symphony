// routes/learnings-routes.js
import express from "express";
import * as usersControllers from '../controllers/users-controllers.js';

const router = express.Router();

router.get('/',usersControllers.getUsers);

//router.get('/user/:uid');

router.post('/signup', usersControllers.signup);
router.post('/login', usersControllers.login);



export default router;
