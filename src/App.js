import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Client from './Pages/Client';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

import './App.css';

function App() {
  return (
      <div >
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/client" component={Client} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
      </div>
  );
}

export default App;
