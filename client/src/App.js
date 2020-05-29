import React from 'react';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import MyHeader from './Components/header';
import {Layout} from 'antd';
import 'antd/dist/antd.css';

const {Header, Content} = Layout

function App() {
  return (
   <>
    <Router>
      <Layout className="layout">
          <Header><MyHeader/></Header>
          <Layout>
        <Content>
          <Switch>
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
