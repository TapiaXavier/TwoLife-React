import {createContext,useReducer} from 'react'
import Login from '../../views/Login'
import { AUTH_TYPES } from '../actions/authActions'
import {authInitState, authReducer } from '../reducers/authReducers'


const authContext=createContext(authInitState)

function AuthProvider({children}){
  const [authState, dispatch] = useReducer(authReducer, authContext)
  const loginHandler=(user)=>{
    dispatch({type:AUTH_TYPES.LOGIN,user})
  }
  
  const logoutHandler=()=>{
    dispatch({type:AUTH_TYPES.LOGOUT})
  }
  
  const auth={
    ...authState,
    onLogin:loginHandler,
    onLogout:logoutHandler
  }
 
  return(
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

export {authContext,AuthProvider}