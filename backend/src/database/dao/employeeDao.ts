import Logging from '../../logging/logging';
import Employee from '../../models/employee';

export class EmployeeDao {
    public static getEmployees() {
        return Employee.find();
    }

    public static getEmployeeByName(name: string) {
        return Employee.find({ name: name });
    }

    public static async addEmployee(addEmployeeReq: any) {
        Logging.info(`adding user dao ${JSON.stringify(addEmployeeReq)}`);
        return await Employee.create(addEmployeeReq);
    }
}
