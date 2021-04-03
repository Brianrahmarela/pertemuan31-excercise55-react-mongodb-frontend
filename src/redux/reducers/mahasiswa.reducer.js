import {REGISTER, LOGIN} from '../actions/mahasiswa.action'

const token = localStorage.getItem('token')

const initialState = token ? {
  isLogged: true,
  data: []
} : {
  isLogged: false,
  data: []
}

const mahasiswa = (state = initialState, action) => {
  switch (action.type){
    case REGISTER:
      console.log("action di dlm register", action);
      return {
        registerData : action.payload
      };
    case LOGIN:
      console.log("action di dlm login", action);
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};

export default mahasiswa;
