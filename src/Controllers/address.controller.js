import { Address } from "../Models/Address/index.js";
import {validationResult} from "express-validator";

export const createNewAddress = async (req, res) => {
    try {
        const { id, userId, country, state, city, zipCode, address } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const newAddress = await Address.create({
            id,
            userId,
            country,
            state,
            city,
            zipCode,
            address,
        });

        res.status(201).json(newAddress);
    } catch (error) {
        console.error('Error creating address:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getSingleAddress = async (req, res) => {
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

export const getAllAddresses = async (req, res) => {
    try {
        const addresses = await Address.findAll();

        if (!addresses || addresses.length === 0) {
            res.status(404).json({ error: 'No addresses' });
            return;
        }

        res.json(addresses);
    } catch (error) {
        console.error('Error fetching addresses:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateAddress = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, country, state, city, zipCode, address } = req.body;

        const addressToUpdate = await Address.findByPk(id);

        if (!addressToUpdate) {
            res.status(404).json({ error: 'Address not found' });
            return;
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        if (userId !== undefined) {
            addressToUpdate.userId = userId;
        }
        if (country !== undefined) {
            addressToUpdate.country = country;
        }
        if (state !== undefined) {
            addressToUpdate.state = state;
        }
        if (city !== undefined) {
            addressToUpdate.city = city;
        }
        if (zipCode !== undefined) {
            addressToUpdate.zipCode = zipCode;
        }
        if (address !== undefined) {
            addressToUpdate.address = address;
        }

        await addressToUpdate.save();
        res.json(addressToUpdate);
    } catch (error) {
        console.error('Error updating address:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteAddress = async (req, res) => {
    try {
        const { id } = req.params;
        const addressToDelete = await Address.findByPk(id);

        if (!addressToDelete) {
            res.status(404).json({ error: 'Address not found' });
            return;
        }

        await addressToDelete.destroy();

        res.status(204).send();
    } catch (error) {
        console.error('Error deleting address:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
