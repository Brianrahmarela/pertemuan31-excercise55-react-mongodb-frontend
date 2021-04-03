import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import {useSelector} from 'react-redux'


function App() {
  const isLogged = useSelector(state => state.mahasiswa.isLogged)
  console.log(isLogged);

  return (
    <div className="App">
      <h1>Get mongodb API in react-redux</h1>

      <Router>
        <Switch>
          <Route exact path ="/">
            {isLogged ? <Home/> : <Redirect to="/login"/>}
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
