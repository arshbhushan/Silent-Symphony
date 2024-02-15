// routes/learnings-routes.js

import express from "express";
import * as learningsControllers from '../controllers/learnings-controllers.js';
import {check} from  "express-validator";

const router = express.Router();

router.get('/:learningId', learningsControllers.getLearningsById);
router.get('/user/:uid', learningsControllers.getLearningByUserId);

router.post(
    '/',
    [
        check('title').not().isEmpty(),
        check('description').not().isEmpty(),
        check('image').not().isEmpty(),
        check('creator').not().isEmpty(),
        
    ],
    learningsControllers.createLearning
    );

router.patch('/:lid',[
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 }).withMessage('Description must be at least 5 characters long'),
    check('image').not().isEmpty(),

],
learningsControllers.updateLearning);


router.delete('/:lid',learningsControllers.deleteLearning); 


export default router;



//for finger spelling 

// router.post(
//     '/',
//     [
//         check('Alphabet').not().isEmpty(),
//         check('handShape.imageUrl').not().isEmpty(),
//         check('handShape.description').isLength({min:5}),
//         check('videoUrl').not().isEmpty(),
//         check('mnemonicTip').not().isEmpty(),
//         check('creator').not().isEmpty(),
//     ],
//     learningsControllers.createLearning
//     );

// router.patch('/:lid',[
//     check('Alphabet').not().isEmpty(),
//     check('handShape.imageUrl').not().isEmpty(),
//     check('handShape.description').not().isEmpty(),
//     check('videoUrl').not().isEmpty(),
//     check('mnemonicTip').not().isEmpty(),
// ],
// learningsControllers.updateLearning);



