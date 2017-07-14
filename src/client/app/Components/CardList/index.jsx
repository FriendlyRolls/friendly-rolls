import React, { Component } from 'react';
import Card from '../Card/index.jsx'
import './styles.less'

class CardList extends Component {
    render () {
        let cardArray = this.props.cardItem.map(card => {
            console.log("card",card);
            return ( <Card userType={ this.props.userType } name={ card } />)
        })
        return (
            <div className='cardWrapper'>
                <ul className='cardOuter'>
                    {cardArray}
                </ul>
            </div>
        );
    }
}

export default CardList
