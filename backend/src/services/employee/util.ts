import { AddEmployeeRequest } from './constants';

export class EmployeeUtil {
    static validateAddEmployeeReq = (addRequestBody: AddEmployeeRequest) => {
        if (!addRequestBody.name || !addRequestBody.email) {
            return false;
        }

        return true;
    };
}
