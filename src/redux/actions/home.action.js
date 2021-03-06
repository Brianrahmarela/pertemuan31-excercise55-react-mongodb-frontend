import axios from "axios"

export const GET_DETAILUKM = 'GET_DETAILUKM'

//function dari const diatas
export const setDetailUkm = (data) => {
  return{
    type:GET_DETAILUKM,
    payload: data
  }
}

export const detailUkmAction = () =>  {
  return function(dispatch){
    const token = localStorage.getItem("token");

    axios.get('https://p31-excercise55-mongod-backend.herokuapp.com/detailukm/idmahasiswa', {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
     })
     .then((response) => {
        console.log("response dari server detail ukm", response);
        dispatch(setDetailUkm(response.data))
      })
      .catch((error) => {
        console.log(error);
      })
  }
}