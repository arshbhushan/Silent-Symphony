// routes/learnings-routes.js

import express from "express";
import {check} from  "express-validator";
import * as learningsControllers from '../controllers/learnings-controllers.js';
import { fileUpload } from "../middleware/file-upload.js";
import cors from 'cors';
import checkAuth from "../middleware/check-auth.js";

const router = express.Router();
router.use(cors());

router.get('/:learningId', learningsControllers.getLearningsById);

router.get('/user/:uid', learningsControllers.getLearningByUserId);

router.use(checkAuth);

router.post(
    '/',
    fileUpload.single('image'),
    [
        check('title').not().isEmpty(),
        check('description').not().isEmpty(),
        // check('image').not().isEmpty(),
        check('creator').not().isEmpty(),
        
    ],
    learningsControllers.createLearning
    );

router.patch('/:lid',[
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 }).withMessage('Description must be at least 5 characters long'),
    //check('image').not().isEmpty(),

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



