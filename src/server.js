import express from 'express';
import bodyParser from "body-parser";
import mysql from 'mysql2';
import {userRoutes} from "./Routes/user.routes.js";
import {addressRoutes} from "./Routes/address.routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//config db

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

app.use(userRoutes);

app.use(addressRoutes);

app.listen(port, () => {
    console.log(`server is on http:localhost/${port}`);
});