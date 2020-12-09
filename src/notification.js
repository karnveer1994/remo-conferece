import React, { Component} from 'react';

export default class Notification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fadeIn: false
    }
  }

  render(){
    return(
      <div className="notification">
        user has joined the table
      </div>
    )
  }
}