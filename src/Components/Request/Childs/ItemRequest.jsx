import React, { Component } from 'react'
import Delete from './Delete'

class ItemRequest extends Component {

  constructor (props) {
    super()
    this.state = {
      check: 'disabled',
      reject: 'reject'
    }
  }

  componentWillMount() {
    this.setState({
      body: this.defaultBody()
    });
  }

  handleInputTerminal = (e) => {
    const value = e.target.value

    this.setState({
      terminal: value,
      check: 'enabled'
    });

    if(value === "") {
      this.setState({
        check: 'disabled'
      });
    }
  }

  deleteItem = () => {
    this.setState({
      body: this.deleteBody()
    });
  }

  setDefaultBody = () => {
    this.setState({
      body: this.defaultBody()
    });
  }

  handleDelete = () => {
    this.props.onDelete(this.props.item);
  }

  defaultBody = () => {
    return (

      <div className="flex-container">
        <div className="flex-container">
          <Delete perform={this.deleteItem} id={this.props.item.id}/>
          <div>
            <h3>{this.props.item.razon}</h3>
            <p className="cuit"><span>CUIT:</span>{this.props.item.cuit}</p>
          </div>
        </div>
        <div className="">
          <p>Nº de establecimiento</p>
          <strong>{this.props.item.establecimiento}</strong>
          <span className="date">15/09/2017</span>
        </div>
        <div className="flex-container">
          <form name="terminal">
            <input type="text" name="terminal" value={this.state.terminal} onChange={this.handleInputTerminal} placeholder="Nº de Terminal" />
          </form>
          <span className={this.state.check}></span>
        </div>
      </div>
    )
  }

  deleteBody = () => {
    return (
      <div className="block-confirm">
        <span className={this.state.reject}></span>
        <div className="border-confirm">
          <p>¿Estás seguro de rechazar la solicitud de este comercio?</p>
          <a className="btn-reject" onClick={this.setDefaultBody}>Cancelar</a>
          <a className="btn-confirm" onClick={this.handleDelete}>Rechazar</a>
        </div>
      </div>
    )
  }


  render() {
    return (
      this.state.body
    );
  }
}

export default ItemRequest;
