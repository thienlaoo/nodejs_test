import express from 'express';
import {getSingleAddress} from "../Controllers/address.controller.js";
import {createNewAddress} from "../Controllers/address.controller.js";
import {getAllAddresses} from "../Controllers/address.controller.js";
import {updateAddress} from "../Controllers/address.controller.js";
import {deleteAddress} from "../Controllers/address.controller.js";
import {validateCreateAddress} from "../Validation/Address/validate.address.js";
import {validateUpdateAddress} from "../Validation/Address/validate.address.js";

export const addressRoutes = express.Router();

addressRoutes.post('/addresses', validateCreateAddress, createNewAddress);
addressRoutes.get('/addresses/:id', express.json(), getSingleAddress);
addressRoutes.get('/addresses', express.json(), getAllAddresses);
addressRoutes.patch('/addresses/:id', validateUpdateAddress, updateAddress);
addressRoutes.delete('/addresses/:id', express.json(), deleteAddress);
