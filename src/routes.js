import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import login from './pages/login';
import Tickets from './pages/Tickets';

function Login() {
  return (
    <Router>
      <div className='App'>
        <Link to='/'></Link>
        <Link to='/Tickets'></Link>
      </div>
      <Switch>
        <Route exact path='/' component={login} />
        <Route path='/Tickets' component={Tickets} />
      </Switch>
    </Router>
  );
}
 
export default Login;