import {
    EmployeeProfile,
    EmployeeStatus,
} from '../../common/employeeConstants';

export interface Employee {
    id: string;
    name: string;
    email: string;
    phone: string;
    age: number;
    profile: EmployeeProfile;
    status: EmployeeStatus;
}
