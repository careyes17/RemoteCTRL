import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './views/Home/Home';
import Crane from './views/Crane/Crane';
import PrinterInterface from './views/PrinterInterface/PrinterInterface';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/printer' exact component={PrinterInterface}></Route>
        <Route path='/crane' exact component={Crane}></Route>
        <Route path='/' render={() => <div>404</div>}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
