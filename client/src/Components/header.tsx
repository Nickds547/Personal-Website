import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Layout, Affix} from 'antd';

const {Header, Sider} = Layout;

const MyHeader = () => {

    const [selected, setSelected] = useState('home');


    return (
            <Layout>
                <Affix offsetTop={0}>
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
                            <Link to='projects'>Projects</Link>
                        </Menu.Item>
                    </Menu>
                </Affix>
            </Layout>
    )
}

export default MyHeader; 