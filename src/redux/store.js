import {reducermob,reducertab,reducerapi} from './mobil/reducer';
import { buymob,buytab ,fetchusersuccess,fetchusersrequest,fetchusersfailure} from './mobil/createAction';
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunkmiddleware from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';


let combainreducer=combineReducers({
   MOB:reducermob,
   TAP:reducertab,
   API:reducerapi
})


export const fetchusers=()=>{

   return function(dispatch){
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then((res)=>{
           const user=res.data.map(user=>user.name);
           dispatch(fetchusersuccess(user))
       })
       .catch((error)=>{
           dispatch(fetchusersfailure(error.message))
       })
   }
}

export const store=createStore(combainreducer,applyMiddleware(thunkmiddleware));

// store.subscribe(()=>console.log(store.getState()))









