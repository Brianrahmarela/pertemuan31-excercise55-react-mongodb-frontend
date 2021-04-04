import {combineReducers} from 'redux';
import mahasiswa from './mahasiswa.reducer'
import detailUkm from './home.reducer'

const rootReducer = combineReducers({mahasiswa,detailUkm});

export default rootReducer;