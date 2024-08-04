import React from 'react'
import "./styles.css";


const Button = ({text ,btnFunction,blue}) => {
  return (
    <div className={blue ?"btn btn-blue" : 'btn'} onClick={btnFunction}>
    {text}
  
    </div>
  )
}

export default Button
