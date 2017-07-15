import React from 'react'
import './styles.less'

const Card = (props) => {
  var styles = {
    backgroundImage: `url(${props.image})`
};
  console.log(props.image)
    return (
        <label>
          <input type="checkbox" />
            <div className="card">
                <li className='front' style={styles} >
                  <span className="cardText">{ props.userType }: { props.name } { 'Health: 50'}</span>
                </li>
                <div className="back"></div>
            </div>
      </label>
    )
}

export default Card;
