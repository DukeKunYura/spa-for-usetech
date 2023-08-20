import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';

const { Header } = Layout;

const HeaderField: FC = () => {
    const navigate = useNavigate();
    const handleMenuClick = (e: MenuInfo) => {
        console.log("click " + e.key);
        navigate(e.key);
    }
    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                onClick={handleMenuClick}
            >
                <Menu.Item key="/">Home</Menu.Item>
                <Menu.Item key="/person">Person</Menu.Item>
                <Menu.Item key="/test">Test</Menu.Item>
                <Menu.Item key="/login">Login</Menu.Item>
                <Menu.Item key="/nothing-here">Nothing Here</Menu.Item>
            </Menu>
        </Header>
    )
}

export default HeaderField;


