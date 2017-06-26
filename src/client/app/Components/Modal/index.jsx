import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import React, { Component } from 'react';

class Modal extends Component {
  render () {
    if(this.props.isOpen){
      return (
        <ReactCSSTransitionGroup transitionName={this.props.transitionName}>
          <div className="modal">
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
      );
    } else {
      return <ReactCSSTransitionGroup transitionName={this.props.transitionName} />;
    }
  }
}

export default Modal
