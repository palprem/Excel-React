import React from 'react';
import './App.css';
import CompA from './CompA'
import CompB from './CompB'
import {Route, Switch, Redirect} from 'react-router-dom';


const App=() =>{
  return(
    <Switch>
      <Route exact path="/"  component={CompA} />
      <Route exact path="/CompB"  component={CompB} />
      <Redirect to="/" />
    </Switch>
  );
 
}
export default App;
