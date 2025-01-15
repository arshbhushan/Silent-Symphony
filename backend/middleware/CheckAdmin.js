import jwt from 'jsonwebtoken';
import { HttpError } from '../models/http-error.js';

export const checkAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new HttpError('Authentication failed. No token provided.', 401));
    }

    const token = authHeader.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, 'supersecret_dont_share');
        req.user = decodedToken; // Attach the decoded token (user data) to req.user
        if (!req.user.roles || !req.user.roles.includes('ADMIN')) {
            console.log(req.user);
            
            return next(new HttpError('Access denied. Admins only.', 403));
        }
    } catch (err) {
        return next(new HttpError('Authentication failed.', 401));
    }

    next();
};
