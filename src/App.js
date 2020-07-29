import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ProtectedRoute} from './ProtectedRoute'
import {Dashboard} from './Dashboard';
import Results from './Results';
import {Login} from './Login';
import {Register} from './Register';
import {NavigationBar} from './components/NavigationBar';
import {NoMatch} from './NoMatch';
import {SQLpage} from './SQL-page';
import {NOSQLpage} from './NOSQL-page';
import {XSSpage} from './XSS-page';
import {CSRFpage} from './CSRF-page';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated : false
    }
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.login = this.login.bind(this);
  }

  async login(callback) {
    const authorized = await (await fetch('http://localhost:8000/auth/login/success')).json()
    if (authorized.authenticated) {
      this.setState({authenticated : true});
    }
    console.log(authorized)
    console.log(this.state.authenticated)
  }

  isAuthenticated() {
    return this.state.authenticated;
  }
  
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/dashboard" render={(props) => (<Dashboard {...props} onLogin={this.login} />) } />
              <Route exact path="/results" component={Results} />
              <Route exact path="/modules/SQL" component={SQLpage} />
              <Route exact path="/modules/NOSQL" component={NOSQLpage} />
              <Route exact path="/modules/XSS" component={XSSpage} />
              <Route exact path="/modules/CSRF" component={CSRFpage} />
              <ProtectedRoute authenticated={this.isAuthenticated} component={NoMatch} />
            </Switch>
          </Router>
      </React.Fragment>
    )
  }  
}

export default App;
