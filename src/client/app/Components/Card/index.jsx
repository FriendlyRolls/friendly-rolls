import React from 'react'
import './styles.less'

const Card = (props) => {
    return (
      <div className='cardItem'>
        <li className='cardInner cardBackground' >
          <span className="cardText">{ props.userType }: { props.name } { 'Health: 50'}</span>
        </li>
      </div>
    )
}

export default Card;
