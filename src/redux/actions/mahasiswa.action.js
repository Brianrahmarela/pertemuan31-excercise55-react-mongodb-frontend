import axios from "axios"

export const REGISTER = 'REGISTER'
export const LOGIN = 'LOGIN'

//function dari const diatas
export const setRegister = (data) => {
  return{
    type:REGISTER,
    payload: data
  }
}
export const setLogin = (data) => {
  return{
    type:LOGIN,
    payload: data
  }
}

//isi dari functionnya register
//ini menerima dispatch dari form onSubmit register.js
export const registerActions= (values, event, history) => (dispatch) => {
  event.preventDefault();
  console.log('register actions values', values);
  console.log('register actions event', event);
  console.log('register actions history', history);

  return axios.post('https://p31-excercise55-mongod-backend.herokuapp.com/auth/register', values)
  .then((response) => {
    console.log("response dari server register", response);
    dispatch(setRegister(response.data.data))
    history.push('/login')
  })
  .catch((error) => {
    console.log(error);
  })
};

//isi dari functionnya login
export const loginActions = (values, event, history) => {
  return function(dispatch){
    event.preventDefault();
    console.log('register actions values', values);
    console.log('register actions event', event);
    console.log('register actions history', history);

    axios.post('https://p31-excercise55-mongod-backend.herokuapp.com/auth/login', values)
    .then((response) => {
      console.log('response login dari server', response);

      localStorage.setItem('token', response.data.token)
      dispatch(setLogin(response.data.token))
      history.push('/');  
    })
    .catch((error) => console.log(error));
  }
}