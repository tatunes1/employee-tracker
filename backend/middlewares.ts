import { AuthService } from './src/services/auth/authenticationService';
export const authenticateRequest = (req: any, res: any, next: () => void) => {
    try {
        const response = AuthService.verifyToken(req, res);
        console.log('response: ', response);
        if (response.status != 200) {
            return res.status(response.status).send(response.message);
        }
        next();
    } catch (error) {
        return res
            .status(500)
            .send('Something went wrong while validating token');
    }
};
