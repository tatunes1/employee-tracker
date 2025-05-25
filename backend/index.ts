// index.js
import express from 'express';
import connectDB from './src/database/mongoDb/mongodb.connect';
import { AuthService } from './src/services/auth/authenticationService';
import { EmployeeService } from './src/services/employee/employeeService';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import { authenticateRequest } from './middlewares';
import { employeeSchema } from './src/schema/employeeSchema';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5172;

app.use(express.json());
app.use(
    '/graphql',
    graphqlHTTP({
        schema: employeeSchema,
        graphiql: true, // GraphiQL UI at http://localhost:4000/graphql
    })
); // For parsing JSON in request body
connectDB();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.post('/addEmployee', authenticateRequest, (req, res) => {
    EmployeeService.addEmployee(req.body);
    res.status(200).send('added employee');
});

app.get('/generateToken', (req, res) => {
    const token = AuthService.generateToken({
        userId: req.query.userId,
        role: req.query.role,
    });
    res.status(200).send(token);
});

// app.post('/verifyToken', (req, res) => {
//     AuthService.verifyToken(req, res);
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
