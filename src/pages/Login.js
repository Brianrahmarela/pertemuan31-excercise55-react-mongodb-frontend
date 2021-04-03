import { useState } from "react"
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {loginActions} from '../redux/actions/mahasiswa.action'

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const mahasiswa = useSelector(state => state.mahasiswa)
  console.log('mahasiswa dari store',mahasiswa);

  const [loginState, setloginState] = useState({
    name: "",
    password: "",
  })
  
  const handleChange = (event) => {
    // event.preventDefault
    setloginState({
      ...loginState,
      [event.target.name]: event.target.value
    })
  }

  console.log(loginState);
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(event)=>{
        dispatch(loginActions(loginState, event, history))
      }}>
        <input 
        type="text" name="name" autoComplete="username"
        value={loginState.name}
        placeholder="Masukan username" 
        onChange={(event) => handleChange(event)}
        />
        <input 
        type="password" name="password" autoComplete="current-password"
        value={loginState.password}
        placeholder="Masukan password"
        onChange={(event) => handleChange(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login

