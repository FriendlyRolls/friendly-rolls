import React, { Component } from 'react';
import Item from '../Item/index.jsx'

class List extends Component {
    render () {
        let itemArray = this.props.listItem.name.map(item => {
            console.log("item",item);
            return ( <Item name={ item } />)
        })
        return (
            <div className="listWrapper">
                <ul>
                    {itemArray}
                </ul>
            </div>
        );
    }
}

export default List