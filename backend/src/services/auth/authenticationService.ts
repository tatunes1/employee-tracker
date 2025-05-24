import jwt from 'jsonwebtoken';

export class AuthService {
    static generateToken = (payload: any) => {
        const jwtSecretKey: jwt.Secret =
            process.env.JWT_SECRET_KEY || 'defaultSecret';
        console.log('paylod ', payload);
        console.log('JWT_SECRET_KEY: ', process.env.JWT_SECRET_KEY);
        return jwt.sign(payload, jwtSecretKey, {
            expiresIn: '1h',
        });
    };

    static verifyToken = (req: any, res: any) => {
        const jwtSecretKey: jwt.Secret =
            process.env.JWT_SECRET_KEY || 'defaultSecret';

        const authHeader = req.header('Authorization');
        if (!authHeader) {
            return res.status(401).send('Authorization header missing');
        }

        // Usually the header is like "Bearer <token>"
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).send('Token missing');
        }

        // Then verify token
        try {
            const decodedToken = jwt.verify(token, jwtSecretKey);
            res.send(decodedToken).status(200);
        } catch (error) {
            return res.status(401).send('Invalid token');
        }
    };
}
