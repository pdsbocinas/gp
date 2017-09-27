import React, { Component } from 'react'
import ItemRequest from './Childs/ItemRequest'
import { Col } from 'react-bootstrap'

class Request extends Component {
  constructor () {
    super()
    this.state = {
      name: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items
    });
  }

  componentWillMount() {
    this.setState({
      items: this.props.items
    });
  }

  onDeleteItem = (item) => {
    this.props.onDelete(item);
  }

  render() {
    return (
      <Col xs={12} lg={8} lgOffset={2}>
        {this.state.items.map(item => (
          <div key={item.id} className='panel panel-default'>
            <div className='panel-body'>
              <ItemRequest item={item} onDelete={this.onDeleteItem} />
            </div>
          </div>
        ),this)}
      </Col>
    );
  }
}

export default Request;
