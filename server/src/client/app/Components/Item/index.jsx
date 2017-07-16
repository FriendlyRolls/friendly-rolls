import React from 'react'
import './styles.less'

const Item = (props) => {
    return (
            <li className='listItem'><span>{ props.userType }: { props.name }</span></li>
    )
}

export default Item;
