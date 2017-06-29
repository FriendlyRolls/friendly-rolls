import React from 'react'
import './style.less'

const Button = (props) => {
  console.log(props)
  return (
    <div>
      <button onClick={ props.onClick }>{props.title}</button>
    </div>
  )
}

export default Button
