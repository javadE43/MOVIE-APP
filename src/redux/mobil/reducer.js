import {BUY_MOB}from'./action';
import {BUY_TAB}from'./action';
import {FETCH_USERS_REQUEST}from'./action';
import {FETCH_DATA_SUCCESS}from'./action';
import {FETCH_DATA_FAILURE}from'./action';

let INITIALSTATEMOB={
    value:0,
    info:''
}
let INITIALSTATETAB={
    value:0,
    info:''
}



let INITIALAPISTATE={
    loding:true,
    data:[],
    error:''
}

export const reducermob=(state=INITIALSTATEMOB,action)=>{
    switch (action.type) {
        case BUY_MOB:
             return(
                {
                    ...state,
                    value:state.value + 1,
                    info:action.info
                }
             )

            break;
        default: return state
            break;
    }
}




// 
export const reducertab=(state=INITIALSTATETAB,action)=>{
    switch (action.type) {
        case BUY_TAB:
             return(
                {
                    ...state,
                    value:state.value - 1,
                    info:action.info
                }
             )

            break;
        default: return state
            break;
    }
}








// API REDUCER

export const reducerapi =(state=INITIALAPISTATE,action)=>{

    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return(
                {
                    ...state,
                    loding:'loding'
                }
            )
            
        break;
        case FETCH_DATA_SUCCESS:
            return(
                {
                    ...state,
                    loding:false,
                    data:action.payload,
                    error:''
                }
            )
             break;
         case FETCH_DATA_FAILURE:
            return(
                {
                    ...state,
                    loding:false,
                    data:[],
                    error:action.payload
                }
            )
             break;
    
        default: return state
            break;
    }

}


