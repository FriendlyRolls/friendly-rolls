import React from 'react'

const Item = (props) => {
    return (
            <li className='listItem'><span>Character Name: { props.name }</span></li>
    )
}

export default Item;