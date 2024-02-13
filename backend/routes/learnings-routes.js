// routes/learnings-routes.js

import express from "express";
import * as learningsControllers from '../controllers/learnings-controllers.js';

const router = express.Router();

router.get('/:learningId', learningsControllers.getLearningsById);
router.get('/user/:uid', learningsControllers.getLearningByUserId);
router.post('/',learningsControllers.createLearning);

router.patch('/:lid',learningsControllers.updateLearning);
router.delete('/:lid',learningsControllers.deleteLearning); 


export default router;
