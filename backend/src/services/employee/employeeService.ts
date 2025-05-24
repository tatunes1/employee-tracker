import { AddEmployeeRequest } from './constants';
import { EmployeeUtil } from './util';

class EmployeeService {
    constructor() {}

    addEmployee = (request: AddEmployeeRequest) => {
        const isValidReq = EmployeeUtil.validateAddEmployeeReq(request);
    };
}
