import jwt from 'jsonwebtoken';
import { HttpError } from '../models/http-error.js';

const checkAuth = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error('Authentication failed!');
    }
    const decodedToken = jwt.verify(token, 'supersecret_dont_share');
    req.userData = { userId: decodedToken.userId, roles: decodedToken.roles }; // Attach roles
    next();
  } catch (err) {
    const error = new HttpError('Authentication failed!', 401);
    return next(error);
  }
};

export default checkAuth;