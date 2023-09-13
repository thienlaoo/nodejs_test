const express = require('express');
import {getSingleUser} from "../Controllers/user.controller";
import {createNewUser} from "../Controllers/user.controller";
export const userRoutes = express.Router();

userRoutes.post('/users', express.json(), createNewUser);
userRoutes.get('/user/:id', express.json(), getSingleUser);