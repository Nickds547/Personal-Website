import React from 'react';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home'
import './App.css';

function App() {
  return (
   <>
    <Router>
      <Switch>
        <Route path="/"><Home/> </Route>
      </Switch>
      </Router>
   </>
  );
}

export default App;
