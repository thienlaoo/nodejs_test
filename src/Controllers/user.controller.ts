import type {Request, Response} from 'express';
import {User} from '../Models/User';

export const createNewUser = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {

        const {id, firstName, lastName, birthday, image, createdAt} = req.body;

        const newUser = await User.create({
            id, firstName, lastName, birthday, image, createdAt
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({error: 'Internal server error'});
    }
};
export const getSingleUser = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const {id} = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            res.status(404).json({error: 'User not found'});
            return;
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({error: 'Internal server error'});
    }
};
