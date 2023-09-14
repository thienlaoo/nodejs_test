import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from "body-parser";
import mysql from 'mysql2';
import {options} from "./Docs/docs.js";
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import {userRoutes} from "./Routes/user.routes.js";
import {addressRoutes} from "./Routes/address.routes.js";


const app = express();
const port = process.env.PORT || 3000;


const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(bodyParser.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
});

db.connect((err) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('connected to MySQL');
    }
});


app.get('/', (req, res) => {
    res.send('You can reach swagger ui and docs with /api-docs endpoint');
})


app.use(userRoutes);
app.use(addressRoutes);


app.listen(port, () => {
    console.log(`server is on http://localhost:${port}`);
});

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of users
 *     description: Get a list of all users
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: A list of users
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     description: Delete a user by their unique ID
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: User deleted successfully
 *       '404':
 *         description: User not found
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the given data
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *               image:
 *                 type: string
 *             example:
 *               id: 1
 *               firstName: John
 *               lastName: Doe
 *               phoneNumber: +1234567890
 *               birthday: 1990-01-01
 *               image: john-doe.jpg
 *     responses:
 *       '201':
 *         description: User created successfully
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a single user by ID
 *     description: Get a user by their unique ID
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: User found
 *       '404':
 *         description: User not found
 */

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Update a user by ID
 *     description: Update a user with the given ID
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *               image:
 *                 type: string
 *             example:
 *               firstName: John
 *               lastName: Doe
 *               birthday: 1990-01-01
 *               image: new-john-doe.jpg
 *     responses:
 *       '200':
 *         description: User updated successfully
 *       '404':
 *         description: User not found
 */

/**
 * @swagger
 * /addresses:
 *   post:
 *     summary: Create a new address
 *     description: Create a new address with the given data.
 *     tags:
 *       - Addresses
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               userId:
 *                 type: integer
 *               country:
 *                 type: string
 *               state:
 *                 type: string
 *               city:
 *                 type: string
 *               zipCode:
 *                 type: string
 *               address:
 *                 type: string
 *             example:
 *               id: 1
 *               userId: 2
 *               country: USA
 *               state: California
 *               city: Los Angeles
 *               zipCode: "90001"
 *               address: 123 Main St
 *     responses:
 *       '201':
 *         description: Address created successfully.
 */

/**
 * @swagger
 * /addresses/{id}:
 *   get:
 *     summary: Get an address by ID
 *     description: Get an address by its ID.
 *     tags:
 *       - Addresses
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the address to get.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Address found.
 *       '404':
 *         description: Address not found.
 */

/**
 * @swagger
 * /addresses:
 *   get:
 *     summary: Get all addresses
 *     description: Get a list of all addresses.
 *     tags:
 *       - Addresses
 *     responses:
 *       '200':
 *         description: A list of addresses.
 */

/**
 * @swagger
 * /addresses/{id}:
 *   patch:
 *     summary: Update an address by ID
 *     description: Update an address by its ID.
 *     tags:
 *       - Addresses
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the address to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               country:
 *                 type: string
 *               state:
 *                 type: string
 *               city:
 *                 type: string
 *               zipCode:
 *                 type: string
 *               address:
 *                 type: string
 *             example:
 *               userId: 2
 *               country: USA
 *               state: California
 *               city: Los Angeles
 *               zipCode: "90001"
 *               address: 123 Main St
 *     responses:
 *       '200':
 *         description: Address updated successfully.
 *       '404':
 *         description: Address not found.
 */

/**
 * @swagger
 * /addresses/{id}:
 *   delete:
 *     summary: Delete an address by ID
 *     description: Delete an address by its ID.
 *     tags:
 *       - Addresses
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the address to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Address deleted successfully.
 *       '404':
 *         description: Address not found.
 */

/**
 * @swagger
 * /users/{userId}/addresses:
 *   get:
 *     summary: Get addresses by user ID
 *     description: Get all addresses associated with a user by their ID.
 *     tags:
 *       - Addresses
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: The ID of the user to get addresses for.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: A list of addresses associated with the user.
 *       '404':
 *         description: No addresses found for this user.
 */


