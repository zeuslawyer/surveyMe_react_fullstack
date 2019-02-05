import {combineReducers} from 'redux'
import { reducer as reduxReducer } from 'redux-form'
import authReducer from './authReducer'

export default combineReducers(
    {
        auth: authReducer,
        form: reduxReducer
    }
)
