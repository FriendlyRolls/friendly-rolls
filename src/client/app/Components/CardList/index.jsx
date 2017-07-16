import React, { Component } from 'react';
import Card from '../Card/index.jsx'
import './styles.less'

class CardList extends Component {
    render () {
        let cardArray = this.props.cardItem.name.map((card, i) => {
            return ( <Card userType={ this.props.userType } name={ card } image={ this.props.cardItem.img[i] } />)
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
