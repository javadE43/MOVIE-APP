import {BUY_MOB} from './action';
import {BUY_TAB} from './action';


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