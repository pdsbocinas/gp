import React, { Component } from 'react'
import Delete from './Childs/Delete'
import disabled from '../../images/icon-disabled.png'
import enabled from '../../images/icon-ok.png'
import { Col } from 'react-bootstrap'

class Request extends Component {
  constructor () {
    super()
    this.state = {
      check: disabled,
      terminal: '',
      name: 0
    }
    this.handleInputTerminal = this.handleInputTerminal.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleInputTerminal = (e) => {
    const terminal = document.forms["terminal"]["terminal"].value;
    const target = e.target;
    const value = target.value;

    this.setState({
      terminal: value,
      check: enabled
    });

    if(terminal === "") {
      this.setState({
        check: disabled
      });
    }
  }

  handleDelete(id){
    this.props.handleDelete(id);
  }

  render() {
    return (
      <Col xs={12} lg={8} lgOffset={2}>
        {this.props.items.map(item => (
          <div key={item.id} className='panel panel-default'>
            <div className='panel-body'>
              <ul>
                <li className="col-lg-1">
                  <Delete onClick={this.handleDelete.bind(this, item.id)} />
                </li>
                <li className="col-lg-5">
                  <h3>{item.razon}</h3>
                  <p className="cuit"><span>CUIT:</span>{item.cuit}</p>
                </li>
                <li className="col-lg-4">
                  <p>Nº de establecimiento</p>
                  <strong>{item.establecimiento}</strong>
                  <span className="date">15/09/2017</span>
                </li>
                <li className="col-lg-2">
                  <form name="terminal">
                    <input type="text" name="terminal" value={this.state.terminal} onChange={this.handleInputTerminal} placeholder="Nº de Terminal" />
                    <img src={this.state.check} className="disabled" alt="disabled" />
                  </form>
                </li>
              </ul>
            </div>
          </div>
        ),this)}
      </Col>
    );
  }
}

export default Request;
