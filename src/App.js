import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'

import './css/bootstrap.css'
import './css/project.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 



import login from './components/login'
import register from './components/register'
import forgot from './components/forgot'


class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Route  exact path="/" component={login} />
            <Route  path="/register" component={register} />
            <Route  path="/forgot" component={forgot} />
          </div>
        </Router>
    );
  }
}

export default App;
