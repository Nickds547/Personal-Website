import React from 'react';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import MyHeader from './Components/header';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const {Header, Content} = Layout

function App() {
  return (
   <>
    <Router>
      <Layout className="layout">
          <Header><MyHeader/></Header>
          <Layout>
            <Content style={{background: "linear-gradient(to bottom right, #40a9ff, #91d5ff)"}}>
          <Switch>
            <Route path="/projects"><Projects/></Route>
            <Route path="/"><Home/></Route>
          </Switch>
        </Content>
        </Layout>
      </Layout>
    </Router>
    </>
  );
}

export default App;
