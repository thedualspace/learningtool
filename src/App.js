import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Dashboard} from './Dashboard';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {NoMatch} from './NoMatch';
import {XSSpage} from './XSS-page';


function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/XSS" component={XSSpage} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
