import { Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import './employeeData.css';
import EmployeeService from '../../services/employeeService/employeeService';
import { COLUMN_HEADERS } from '../../constants/employeeConstant';
import { EmployeeCard } from './employeeCard';

export const EmployeeData = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    useEffect(() => {
        const loadEmployeeData = async () => {
            try {
                const data = await EmployeeService.getEmployeeData();
                setEmployees(data);
                //console.log('data: ', data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        loadEmployeeData();
    }, []);

    const removeSelectedEmployee = () => {
        setSelectedEmployee(null);
    };

    const handleRowClick = (emp) => {
        setSelectedEmployee(emp);
    };

    return (
        <div style={{ backgroundColor: 'white' }}>
            <Row className='row' gutter={[1, 1]}>
                {COLUMN_HEADERS.map((column) => {
                    return (
                        <Col xl={4}>
                            <div className='box'>{column.toUpperCase()}</div>
                        </Col>
                    );
                })}
            </Row>

            {employees.map((emp) => {
                console.log('emp: ', emp);
                return (
                    <Row
                        gutter={[1, 1]}
                        key={emp.id}
                        onClick={() => handleRowClick(emp)}
                    >
                        {Object.entries(emp).map(([key, value]) => {
                            //console.log('inside col');
                            if (key == 'id') {
                                return;
                            }
                            return (
                                <Col xl={4}>
                                    <div className='box-item'>{value}</div>
                                </Col>
                            );
                        })}
                    </Row>
                );
            })}

            {selectedEmployee && (
                <EmployeeCard
                    data={{ selectedEmployee, removeSelectedEmployee }}
                />
            )}
        </div>
    );
};
