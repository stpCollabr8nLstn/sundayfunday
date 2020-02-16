import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Ribbon from './components/Ribbon';
import Bug from './components/Bug';
import Epic from './components/Epic';

function App() {
  return (
    <Router>
        <Ribbon />
        <Switch>
          <Route path="/bug">
            <Bug />
          </Route>
          <Route path="/epic">
            <Epic />
          </Route>
        </Switch>
      
    </Router>
    
  );
}

export default App;
