import React, { Component } from 'react'
import remove from '../../../images/icon-delete.png'

class Delete extends Component {

  constructor () {
    super()
  }

  handleDeleteItem = (e) => {
    this.props.perform();
  }

  render() {
    return (
      <div className="remove">
        <img src={remove} className="remove" alt="remove" onClick={this.handleDeleteItem} />
      </div>
    );
  }
}

export default Delete;
