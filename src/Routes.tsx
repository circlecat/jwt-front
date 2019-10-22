import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Home } from './Pages/Home';
import { Register } from './Pages/Register';
import { Login } from './Pages/Login';
import { Bye } from './Pages/Bye';

const Routes: React.FC = () => {
  
  return (
    <BrowserRouter>
      <header>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/register'>Register</Link></div>
        <div><Link to='/login'>Login</Link></div>
        <div><Link to='/bye'>Bye</Link></div>
      </header>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/bye' component={Bye} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
