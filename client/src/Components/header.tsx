import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Layout} from 'antd';

const {Header, Sider} = Layout;

const MyHeader = () => {

    const [selected, setSelected] = useState('home');


    return (
            <Layout>
            <Menu 
                defaultSelectedKeys={[selected]} 
                onClick={ e =>setSelected(e.key)} 
                mode="horizontal"
                theme="dark"
                
                >
                <Menu.Item  key="home">
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key="projects">
                    Projects
                </Menu.Item>
            </Menu>
            </Layout>
    )
}

export default MyHeader; 