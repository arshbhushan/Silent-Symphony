import { v4 as uuid } from 'uuid';
import { HttpError } from '../models/http-error.js';

const DUMMY_USERS=[
    {
        id:'u1',
        name:'Arsh Bhushan',
        email:'test@test.com',
        password:'testers'
    }
];

export const getUsers=(req,res,next)=>{
    res.json({users:DUMMY_USERS});  
};

export const signup=(req,res,next)=>{
    const{name,email,password}=req.body;

    const hasUser=DUMMY_USERS.find(u=>u.email ===email);
    if(hasUser){
        throw new HttpError('Could not create user, email already registered. ',422);

    }
    
    const createdUser={
        id: uuid(),
        name,
        email,
        password
    };
    DUMMY_USERS.push(createdUser);

    res.status(201).json({user:createdUser});
};

export const login=(req,res,next)=>{
    const {email,password}=req.body;

    const identifiedUser= DUMMY_USERS.find(u=>u.email===email);

    if(!identifiedUser || identifiedUser.password !== password){
     throw new HttpError('Could not identify user, creds seems to be wrong. ',401);

    }
    res.json({message: 'Logged In!'});

};

 