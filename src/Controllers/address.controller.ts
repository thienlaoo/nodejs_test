import type { Request, Response } from 'express';
import {Address} from "../Models/Address";
import {User} from "../Models/User";


export const createNewAddress = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {

        const {id, userId, country, state, city, zipCode, address} = req.body;

        const newAddress = await User.create({
        id, userId, country, state, city, zipCode, address
        });

        res.status(201).json(newAddress);
    } catch (error) {
        console.error('Error creating address:', error);
        res.status(500).json({error: 'Internal server error'});
    }
};

export const getSingleAddress = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const { id } = req.params;
        const address = await Address.findByPk(id);

        if (!address) {
            res.status(404).json({ error: 'Address not found' });
            return;
        }

        res.json(address);
    } catch (error) {
        console.error('Error fetching address:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};