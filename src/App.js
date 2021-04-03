import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <h1>Get mongodb API in react-redux</h1>

      <Router>
        <Switch>
          <Route exact path ="/">
            <Home/>
          </Route>
          <Route path ="/register">
            <Register/>
          </Route>
          <Route path ="/login">
            <Login/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
