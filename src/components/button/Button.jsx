import React from 'react'
import proptypes from 'prop-types'
function Button(props) {
  return (
    <button
        className={`btn${props.className}`}
        onclick={props.onClick?()=> props.onClick():
        null}>
        {props.children}
    </button>
    
  )
}

const OutlineButton=props=>{
    return(
        <Button
            className={`btn-outline${props.className}`}
            onclick={props.onClick?()=> props.onClick():
            null}>
            {props.children}
        </Button>
    )
}

Button.proptypes={
    onclick:proptypes.func
}

export default Button