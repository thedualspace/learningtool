import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Dashboard} from './Dashboard';
import {Layout} from './components/Layout';
import {Login} from './Login';
import {NavigationBar} from './components/NavigationBar';
import {NoMatch} from './NoMatch';
import {SQLpage} from './SQL-page';
import {NOSQLpage} from './NOSQL-page';
import {XSSpage} from './XSS-page';
import {CSRFpage} from './CSRF-page';


function App() {
  return (
    <React.Fragment>
      <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/modules/SQL" component={SQLpage} />
            <Route exact path="/modules/NOSQL" component={NOSQLpage} />
            <Route exact path="/modules/XSS" component={XSSpage} />
            <Route exact path="/modules/CSRF" component={CSRFpage} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
