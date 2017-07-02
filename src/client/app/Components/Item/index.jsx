import React from 'react'

const Item = (props) => {
    return (
            <li className='listItem'><span>{ props.userType }: { props.name }</span></li>
    )
}

export default Item;
