import {BUY_MOB} from './action';
import {BUY_TAB} from './action';
import {FETCH_USERS_REQUEST}from'./action';
import {FETCH_DATA_SUCCESS}from'./action';
import {FETCH_DATA_FAILURE}from'./action';

export const buymob=(info)=>{
    return(
        {
            type:BUY_MOB,
            info:info
        }
    )
}


export const buytab=(info)=>{
    return(
        {
            type:BUY_TAB,
            info:info
        }
    )
}


export const fetchusersrequest=()=>{
    return(
        {
            type:FETCH_USERS_REQUEST
        }
    )
}

export const fetchusersuccess=(users)=>{
    return(
        {
            type:FETCH_DATA_SUCCESS,
            payload:users
        }
    )
}

export const fetchusersfailure=(error)=>{
    return(
        {
            type:FETCH_DATA_FAILURE,
            payload:error
        }
    )
}