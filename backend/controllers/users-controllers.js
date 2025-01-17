import { HttpError } from '../models/http-error.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import { userModule } from '../models/user.js';
import jwt from 'jsonwebtoken';

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
    let hashedPassword;
   try {
        //12 is the salt value...Basically how tells the strength of the hash and how hard it is to decrypt it. 
        hashedPassword=await bcrypt.hash(password,12); 
   } catch (err) {
    const error=new HttpError('Could not create user, please try again. ',
    500
    );
    return next(error);
   }


    const createdUser = new userModule({
        name,
        email,
        image:req.file.path, // basically this means this fetches the images here 'http://localhost:5555'+req.file.path
        password:hashedPassword,
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
    let token;
    try {
        token=jwt.sign({
            userId:createdUser.id,
            email:createdUser.email,
            roles:createdUser.roles
        },
            'supersecret_dont_share',
            {expiresIn:'3h'});
    } catch (err) {
        const error=new HttpError('Signing in failed, please try again later. ',
        500
        );
        return next(error);
    }

//'supersecret_dont_share' this is the private serverside key which should not be shared with anyone.
    res.status(201).json({ userId:createdUser.id, email:createdUser.email, token:token });

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


    if(!existingUser){
        const error=new HttpError(
            'Invalid credentials,could not log you in. ',403);

        return next(error);

    }
    let isValidPassword=false;
    try {
        isValidPassword=await bcrypt.compare(password,existingUser.password);
    } catch (err) {
        const error=
        new HttpError('Could not log you in, please check your credentials and try again.',
        500);
        return next(error);
    }
    if(!isValidPassword){
        const error=new HttpError('Invalid credentials, could not log you in. ',
        403);
        return next(error);
    }
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     console.log(errors);
    //     throw new HttpError('Invalid inputs passed, please check your data.', 422);

    // }
    let token;
    try {
        token=jwt.sign({
            userId:existingUser.id,
            email:existingUser.email,
            roles:existingUser.roles
        },
            'supersecret_dont_share',
            {expiresIn:'3h'});
    } catch (err) {
        const error=new HttpError('Logging in failed, please try again later. ',
        500
        );
        return next(error);
    }

    res.json({
        userId:existingUser.id,
        email: existingUser.email,
        token:token
    });

};

