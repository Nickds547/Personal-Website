import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Layout, notification} from 'antd';

const {SubMenu} = Menu;
const {Header} = Layout;


const MyHeader = () => {

    const [selected, setSelected] = useState('home');

    return (
        <Menu 
            theme="dark" 
            defaultSelectedKeys={[selected]} 
            onClick={ e =>setSelected(e.key)} 
            mode="horizontal"
            >
            <Menu.Item  key="home">
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="projects">
                Projects
            </Menu.Item>
        </Menu>
    )
}

export default MyHeader; 