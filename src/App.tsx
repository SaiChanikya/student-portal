import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Profile from './Components/Profile';
import "antd/dist/antd.variable.min.css";
import Signup from './Components/Signup';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router basename='/student'>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/sign-up" exact component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
