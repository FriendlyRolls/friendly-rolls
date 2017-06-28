import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react';

class Modal extends Component {
  render () {
    if(this.props.isOpen){
      return (
        <ReactCSSTransitionGroup transitionName={this.props.transitionName}>
          <div className="modalWrapper" onClick={e => { if(e.target.className === 'modalWrapper') this.props.close() } }>
            <div className="modal">
              {this.props.children}
            </div>
          </div>
        </ReactCSSTransitionGroup>
      );
    } else {
      return <ReactCSSTransitionGroup transitionName={this.props.transitionName} />;
    }
  }
}

export default Modal
