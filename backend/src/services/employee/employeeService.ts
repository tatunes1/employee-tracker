import { AddEmployeeRequest } from './constants';
import { EmployeeDao } from '../../database/dao/employeeDao';
import { EmployeeUtil } from './util';

export class EmployeeService {
    constructor() {}

    static addEmployee = async (request: AddEmployeeRequest) => {
        const isValidReq = EmployeeUtil.validateAddEmployeeReq(request);
        console.log('Req: ', request);
        await EmployeeDao.addEmployee(request);
        return {
            status: 200,
            message: 'Added employee successfully',
        };
    };
}
