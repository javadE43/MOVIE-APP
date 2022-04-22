import {reducermob,reducertab} from './mobil/reducer';
import { buymob,buytab } from './mobil/createAction';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import logger from 'redux-logger';




let combainreducer=combineReducers({
   MOB:reducermob,
   TAP:reducertab
})


export const store=createStore(combainreducer,applyMiddleware(logger));




console.log(store.getState());
const unsubscribe= store.subscribe(()=>console.log(store.getState()));

store.dispatch(buymob('javadE'))
store.dispatch(buytab('4353'))

unsubscribe();