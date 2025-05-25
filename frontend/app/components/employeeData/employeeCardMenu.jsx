import { Dropdown, Menu, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

export const EllipsisMenu = ({ data }) => {
    const { handleAction } = data;
    const handleClickAction = (key) => {
        console.log('key', key);
        handleAction(key);
    };
    const menu = (
        <Menu onClick={({ key }) => handleClickAction(key)}>
            <Menu.Item key='edit'>Edit</Menu.Item>
            <Menu.Item key='delete'>Delete</Menu.Item>
            <Menu.Item key='flag'>Flag</Menu.Item>
            <Menu.Item key='close'>Close</Menu.Item>
        </Menu>
    );
    return (
        <Dropdown overlay={menu} trigger={['click']} placement='bottomRight'>
            <Button icon={<EllipsisOutlined />} />
        </Dropdown>
    );
};
