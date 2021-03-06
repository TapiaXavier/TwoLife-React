import {createContext,useReducer} from 'react'
import { REQUEST_TYPES } from '../actions/requestActions'
import {requestInitState, requestReducer } from '../reducers/requestReducers'


const requestContext=createContext(requestInitState)

function RequestProvider({children}){
  const [requestState, dispatch] = useReducer(requestReducer, requestContext)
  const createHandler=(payload)=>{
    dispatch({type:REQUEST_TYPES.CREATE,payload})
  }
  const updateHandler=(payload)=>{
    dispatch({type:REQUEST_TYPES.DELETE,payload})
  }
  const deleteHandler=(payload)=>{
    dispatch({type:REQUEST_TYPES.UPDATE,payload})
  }
  const request={
    ...requestState,
    onCreate:createHandler,
    onUpdate:updateHandler,
    onDelete:deleteHandler
  }
 
  return(
    <requestContext.Provider value={request}>
      {children}
    </requestContext.Provider>
  )
}

export {requestContext,RequestProvider}
