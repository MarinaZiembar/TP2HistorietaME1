import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {routes} from './Routes';
import './App.css';


function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
              {routes.map((route,i) => (
                <Route
                  key={i}
                  exact path={route.path}
                  component={route.component}
                />
              ))}
          </Switch>
        </div>
      </Router>
  );
}

export default App;
