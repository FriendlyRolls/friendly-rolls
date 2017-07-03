import React from 'react'

const Card = (props) => {
    return (
      <div className='cardItem'>
        <li >
          
          <span>{ props.userType }: { props.name }</span>
        </li>
      </div>
    )
}

export default Card;
