import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchProperty from './pages/SearchProperty';
import PropertyDetails from './pages/PropertyDetails';
import Budgets from './pages/Budgets';
import Calendar from './pages/Calendar';
import Clients from './pages/Clients';
import Control from './pages/Control';
import './App.css'
class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={SearchProperty} />
          <Route path='/detalhes' component={PropertyDetails} />
          <Route path='/orcamentos' component={Budgets} />
          <Route path='/calendario' component={Calendar} />
          <Route path='/clientes' component={Clients} />
          <Route path='/controle' component={Control} />
        </Switch>
      </Router>
    );
  } 
}

export default App;
