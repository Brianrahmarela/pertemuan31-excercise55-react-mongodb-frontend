import { useState } from "react"
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'

import {registerActions} from '../redux/actions/mahasiswa.action'

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state)
  console.log('islogged dari store', isLogged)

  const [register, setRegister] = useState({
    name: "",
    password: ''
  }) 
  console.log(register); 

  const handleChange = (event) => {
    // event.preventDefault
    setRegister({
      ...register,
      [event.target.name]: event.target.value
    })
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(event)=>{
        dispatch(registerActions(register, event, history))
      }}>
        <input 
        type="text" name="name" autoComplete="username"
        value={register.name}
        placeholder="Masukan username" 
        onChange={(event) => handleChange(event)}
        />
        <input 
        type="password" name="password" autoComplete="current-password"
        value={register.password}
        placeholder="Masukan password"
        onChange={(event) => handleChange(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Register
