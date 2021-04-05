import {GET_DETAILUKM} from '../actions/home.action'

const initialState = {
  data: []
} 

const detailUkm = (state = initialState, action) => {
  switch (action.type){
    case GET_DETAILUKM:
      console.log("action di dlm detailukm", action);
      console.log("action dri reducer detailukm", action.payload);
      return {
        ...state,
        data: action.payload.data
      };
    default:
      return state;
  }
};

export default detailUkm;