// app.js
import 'dotenv/config';

import express from 'express';
const app = express();

import authRoutes from './src/routes/auth.js';

import protectedRoute from './src/routes/protectedRoute.js';


app.use(express.json());
app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});