import {BUY_MOB}from'./action';
import {BUY_TAB}from'./action';


let INITIALSTATEMOB={
    value:0,
    info:''
}
let INITIALSTATETAB={
    value:0,
    info:''
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