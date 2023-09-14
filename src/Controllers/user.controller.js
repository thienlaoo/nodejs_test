import {User} from '../Models/User/index.js';
import { Address } from '../Models/Address/index.js';
import {validationResult} from "express-validator";

export const createNewUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Создайте пользователя и сохраните его в базу данных
        const { id, firstName, lastName, phoneNumber, birthday, image } = req.body;
        const newUser = await User.create({
            id,
            firstName,
            lastName,
            phoneNumber,
            birthday,
            image,
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getSingleUser = async (
    req,
    res
) => {
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

export const getAllUsers = async (
    req,
    res
) => {
    try {
        const users = await User.findAll();

        if (!users) {
            res.status(404).json({error: 'No users'});
            return;
        }
        res.json(users);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({error: 'Internal server error'});
    }
};

export const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            res.status(404).json({error: 'User not found'});
            return;
        }

        await user.destroy();

        res.status(204).send();
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({error: 'Internal server error'});
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, phoneNumber, birthday, image } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        if (firstName !== undefined) {
            user.firstName = firstName;
        }
        if (lastName !== undefined) {
            user.lastName = lastName;
        }

        if (lastName !== undefined) {
            user.lastName = lastName;
        }

        if (phoneNumber !== undefined) {
            user.phoneNumber = phoneNumber;
        }

        if (birthday !== undefined) {
            user.birthday = birthday;
        }
        if (image !== undefined) {
            user.image = image;
        }

        await user.save();
        res.json(user);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


