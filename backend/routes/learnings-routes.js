// routes/learnings-routes.js

import express from "express";
import * as learningsControllers from '../controllers/learnings-controllers.js';

const router = express.Router();

router.get('/:learningId', learningsControllers.getLearningById);
router.get('/user/:uid', learningsControllers.getLearningByUserId);

export default router;
