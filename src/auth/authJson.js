// routes/auth.js

import express from 'express';
import { getConnection } from "../database.js";


const secret = process.env.MY_SECRET;
const authRouter = express.Router();


import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// User registration
authRouter.post('/register', async (req, res) => {
 
    try {
        const db = getConnection();
        const { username, email, password, rol } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
       
        const newUser = {
            "id": db.data.users.length+1,
            "email": email,
            "name": username,
            "password": hashedPassword,
            "rol": rol,
            "token": ""
        }

        db.data.users.push(newUser);
        await db.write();

        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Registration failed' });
    }
});

authRouter.get('/', async (req, res) => {
    try {
   
        const db = getConnection();
        res.json(db.data.users);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch users' });
        
    }
})

// User login
authRouter.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = getConnection().data.users.find(user => user.name == username);
      
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed username' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed password' });
        } else {
        const token = jwt.sign({ userId: user.id }, secret, {
            expiresIn: '1h',
        });
      const rol =user.rol;

        res.status(200).json({  
            token, password, username, rol });
        }

    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

export default authRouter;