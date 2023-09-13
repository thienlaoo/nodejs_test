import express from 'express';
import {getSingleAddress} from "../Controllers/address.controller";
import {createNewAddress} from "../Controllers/address.controller";

export const addressRoutes = express.Router();

addressRoutes.post('/addresses', express.json(), createNewAddress);
addressRoutes.get('/address/:id', express.json(), getSingleAddress);