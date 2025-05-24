import { EmployeeProfile } from "../../common/employeeConstants";

export interface AddEmployeeRequest {
    name: string;
    email: string;
    phone: string;
    dob: string;
    profile: EmployeeProfile;
}
