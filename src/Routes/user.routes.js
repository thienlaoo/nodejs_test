import express from "express";
import { getSingleUser } from "../Controllers/user.controller.js";
import { createNewUser } from "../Controllers/user.controller.js";
import { getAllUsers } from "../Controllers/user.controller.js";
import { updateUser } from "../Controllers/user.controller.js";
import { deleteUser } from "../Controllers/user.controller.js";
import {validateCreateUser} from "../Validation/User/validate.user.js";
import {validateUpdateUser} from "../Validation/User/validate.user.js";


export const userRoutes = express.Router();

userRoutes.post('/users', validateCreateUser, createNewUser);
userRoutes.get('/users/:id', getSingleUser);
userRoutes.get('/users', getAllUsers);
userRoutes.delete('/users/:id', deleteUser);
userRoutes.patch('/users/:id', validateUpdateUser, updateUser);
