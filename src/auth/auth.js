// routes/auth.js

import express from 'express';

const authRouter = express.Router();

import User from '../models/User.js';
//import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// User registration
authRouter.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
       // const hashedPassword = await bcrypt.hash(password, 10);
       const hashedPassword = password;
       const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

authRouter.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch users' });
        
    }
})

// User login
authRouter.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        //const passwordMatch = await bcrypt.compare(password, user.password);
        passwordMatch = true;
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.MY_SECRET, {
            expiresIn: '1h',
        });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

export default authRouter;