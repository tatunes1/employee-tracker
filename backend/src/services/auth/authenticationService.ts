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
            return {
                status: 401,
                message: 'Authorization header missing',
            };
        }

        // Usually the header is like "Bearer <token>"
        const token = authHeader.split(' ')[1];
        if (!token) {
            return {
                status: 401,
                message: 'Token missing',
            };
        }

        // Then verify token
        try {
            const decodedToken = jwt.verify(token, jwtSecretKey);
            return {
                status: 200,
                message: decodedToken
            };
        } catch (error) {
            return {
                status: 401,
                message: 'Invalid token',
            };
        }
    };
}
