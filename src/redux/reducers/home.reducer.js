import {GET_DETAILUKM} from '../actions/home.action'

const initialState = {
  data: []
} 

const detailUkm = (state = initialState, action) => {
  switch (action.type){
    case GET_DETAILUKM:
      console.log("action di dlm detailukm", action);
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default detailUkm;