import React, { Component } from 'react';
import Item from '../Item/index.jsx'
import './styles.less'

class List extends Component {
    render () {
        let listArray = this.props.listItem.map(item => {
            console.log("item",item);
            return ( <Item userType={ this.props.userType } name={ item } />)
        })
        return (
            <div className="listWrapper">
                <ul>
                    {listArray}
                </ul>
            </div>
        );
    }
}

export default List
