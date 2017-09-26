import React, { Component } from 'react'
import remove from '../../../images/icon-delete.png'

class Delete extends Component {
  render() {
    return (
      <div className="remove">
        <img src={remove} className="remove" alt="remove" />
      </div>
    );
  }
}

export default Delete;
