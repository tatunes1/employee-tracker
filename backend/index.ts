// index.js
import express from 'express';
import connectDB from './src/database/mongoDb/mongodb.connect';
import { AuthService } from './src/services/auth/authenticationService';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5172;

app.use(express.json()); // For parsing JSON in request body
connectDB();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.get('/generateToken', (req, res) => {
    const token = AuthService.generateToken({
        userId: req.body.userId,
        role: req.body.role,
    });
    res.send(token).status(200);
});

app.get('/generateToken', (req, res) => {
    const token = AuthService.generateToken({
        userId: req.body.userId,
        role: req.body.role,
    });
    res.send(token).status(200);
});

app.post('/verifyToken', (req, res) => {
    AuthService.verifyToken(req, res);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
