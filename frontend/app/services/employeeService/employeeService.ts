import { EmployeeProfile, EmployeeStatus } from './interface';

class EmployeeService {
    constructor() {}

    getEmployeeData = async () => {
        return [
            {
                id: 1,
                name: 'emp1',
                email: 'emp1@gamil.com',
                phone: '+91 9999999999',
                age: 35,
                profile: EmployeeProfile.ENGINEERING_MANAGER,
                status: EmployeeStatus.ACTIVE,
            },
            {
                id: 2,
                name: 'emp2',
                email: 'emp2@gamil.com',
                phone: '+91 8888888888',
                age: 32,
                profile: EmployeeProfile.ENGINEERING_MANAGER,
                status: EmployeeStatus.DELETED,
            },
            {
                id: 3,
                name: 'emp3',
                email: 'emp3@gamil.com',
                phone: '+91 7777777777',
                age: 32,
                profile: EmployeeProfile.PRODUCT_MANAGER,
                status: EmployeeStatus.FLAGGED,
            },
            {
                id: 4,
                name: 'emp1',
                email: 'emp1@gamil.com',
                phone: '+91 9999999999',
                age: 26,
                profile: EmployeeProfile.SOFTWARE_ENGINEER,
                status: EmployeeStatus.ACTIVE,
            },
            {
                id: 5,
                name: 'emp2',
                email: 'emp2@gamil.com',
                phone: '+91 8888888888',
                age: 32,
                profile: EmployeeProfile.SOFTWARE_ENGINEER,
                status: EmployeeStatus.DELETED,
            },
            {
                id: 6,
                name: 'emp3',
                email: 'emp3@gamil.com',
                phone: '+91 7777777777',
                age: 25,
                profile: EmployeeProfile.SOFTWARE_ENGINEER,
                status: EmployeeStatus.FLAGGED,
            },
            {
                id: 7,
                name: 'emp1',
                email: 'emp1@gamil.com',
                phone: '+91 9999999999',
                age: 26,
                profile: EmployeeProfile.SOFTWARE_ENGINEER,
                status: EmployeeStatus.ACTIVE,
            },
            {
                id: 8,
                name: 'emp2',
                email: 'emp2@gamil.com',
                phone: '+91 8888888888',
                age: 29,
                profile: EmployeeProfile.QA_ENGINEER,
                status: EmployeeStatus.DELETED,
            },
            {
                id: 9,
                name: 'emp3',
                email: 'emp3@gamil.com',
                phone: '+91 7777777777',
                age: 27,
                profile: EmployeeProfile.QA_ENGINEER,
                status: EmployeeStatus.FLAGGED,
            },
        ];
    };
}

export default new EmployeeService();
