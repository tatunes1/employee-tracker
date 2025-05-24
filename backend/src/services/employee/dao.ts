import Logging from '../../logging/logging';
import Employees from './schema';

export class EmployeeDao {
    public static getEmployees() {
        return Employees.find();
    }

    public static getEmployeeByName(name: string) {
        return Employees.find({ name: name });
    }

    public static async addEmployee(addEmployeeReq: any) {
        Logging.info(`adding user dao ${JSON.stringify(addEmployeeReq)}`);
        return await Employees.create(addEmployeeReq);
    }
}
