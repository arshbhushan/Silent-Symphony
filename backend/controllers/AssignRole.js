import { HttpError } from '../models/http-error.js';
import { userModule } from '../models/user.js';

export const assignRole = async (req, res, next) => {
    const { email, role } = req.body;

    // Validate inputs
    if (!email || !role) {
        return next(new HttpError('Email and role are required.', 400));
    }

    let user;
    try {
        // Find user by email
        user = await userModule.findOne({ email });
        if (!user) {
            return next(new HttpError('User not found.', 404));
        }
    } catch (err) {
        return next(new HttpError('Fetching user failed, please try again later.', 500));
    }

    // Assign role
    user.role = role;
    try {
        await user.save();
    } catch (err) {
        return next(new HttpError('Assigning role failed, please try again later.', 500));
    }

    res.status(200).json({ message: `Role "${role}" assigned to user "${email}" successfully.` });
};
