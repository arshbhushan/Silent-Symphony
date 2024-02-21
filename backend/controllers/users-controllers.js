import { HttpError } from '../models/http-error.js';
import { validationResult } from 'express-validator';
import { userModule } from '../models/user.js';

export const getUsers = async(req, res, next) => {

    let users;
    try {
     users= await userModule.find({},'-password');
    } catch (err) {
        const error =new HttpError(
            'Fetching users failed, Please try again later. ',500
        );
        return next(error);
    }
    res.json({users:users.map(user=>user.toObject({getters:true}))});

};

export const signup = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }
    const { name, email, password } = req.body;
    
    let existingUser;
    try {
        existingUser = await userModule.findOne({ email: email })
    } catch (err) {
        //console.error('Error during signup:', err);
        const error = new HttpError('Signing Up failed, please try again later.', 500);
        return next(error);
    }
    
    if (existingUser) {
        const error = new HttpError('User already exists, please login instead', 422);
        return next(error);
    }

    const createdUser = new userModule({
        name,
        email,
        image:req.file.path, // basically this means this fetches the images here 'http://localhost:5555'+req.file.path
        password,
        learnings:[]
    });

    try {
        await createdUser.save();

    } catch (err) {
        const error = new HttpError(
            `Signing Up failed, please try again. ${err}`, 500
        );
        return next(error);
    }

    res.status(201).json({ user: createdUser.toObject({ getters: true }) });

};

export const login= async(req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await userModule.findOne({ email: email })
    } catch (err) {
        console.error('Error during Login: ', err);
        const error = new HttpError('Logging in failed, please try again later.', 500);
        return next(error);
    }
    if(!existingUser || existingUser.password!==password){
        const error=new HttpError(
            'Invalid credentials,could not log you in. ',401);

        return next(error);

    }
    
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     console.log(errors);
    //     throw new HttpError('Invalid inputs passed, please check your data.', 422);

    // }


    res.json({ message: 'Logged In!' ,user :existingUser.toObject({getters:true}) });

};

