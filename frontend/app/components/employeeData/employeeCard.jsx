import { Card, Typography, Modal } from 'antd';
import { capitalizeFirstChar } from '../../util/common';
import { CARD_KEYS } from '../../constants/employeeConstant';
import { EllipsisMenu } from './employeeCardMenu';
import { useState } from 'react';
const { Text } = Typography;

export const EmployeeCard = ({ data }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { selectedEmployee, removeSelectedEmployee } = data;
    const handleAction = (key) => {
        switch (key) {
            case 'close':
                removeSelectedEmployee();
                break;
            default:
                console.log('key clicked: ', key);
        }
    };

    const handleModalVisibility = () => {
        setIsModalVisible((prev) => !prev);
    };

    return (
        <>
            <Card
                className='employee-card'
                title='Selected Employee'
                extra={<EllipsisMenu data={{ handleAction }} />}
            >
                {Object.entries(selectedEmployee).map(([key, value]) => {
                    if (!CARD_KEYS.includes(key)) {
                        return;
                    }
                    return (
                        <div
                            className='employee-area'
                            onClick={handleModalVisibility}
                        >
                            <Text strong>{capitalizeFirstChar(key)}: </Text>
                            <Text>{value}</Text>
                        </div>
                    );
                })}
            </Card>

            <Modal
                title='Employee Details'
                open={isModalVisible}
                onCancel={handleModalVisibility}
                footer={[]}
            >
                {selectedEmployee &&
                    Object.entries(selectedEmployee).map(([key, value]) => (
                        <p key={key}>
                            <strong>{capitalizeFirstChar(key)}:</strong> {value}
                        </p>
                    ))}
            </Modal>
        </>
    );
};
