import React, { Component } from 'react'
import Modal from 'react-responsive-modal';

class CreateRequest extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      id: 0
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newRequest = {
      id: this.state.id++,
      razon: this.state.razon,
      cuit: this.state.cuit,
      establecimiento: this.state.establecimiento
    };
    this.props.onCreate(newRequest)
    this.setState({ open: false })
  }

  onOpenModal = (e) => {
    e.preventDefault();
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state;
    return (
      <div className="block-request">
        <span>+</span>
        <a onClick={this.onOpenModal}>Crear solicitud</a>
        <Modal className="request" open={open} onClose={this.onCloseModal} little>
          <h3>Crear Solicitud</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="col-xs-12 col-lg-12">
                <label>Razon Social</label>
                <input type="text" className="form-control" name="razon" value={this.state.razon} onChange={this.handleInputChange} placeholder="Razon Social" />
              </div>
              <div className="col-xs-12 col-lg-6">
                <label>Número de CUIT</label>
                <input type="text" className="form-control" name="cuit" value={this.state.cuit} onChange={this.handleInputChange} placeholder="00-000000-0" />
              </div>
              <div className="col-xs-12 col-lg-6">
                <label>Número de establecimiento</label>
                <input type="text" className="form-control" name="establecimiento" value={this.state.establecimiento} onChange={this.handleInputChange} placeholder="0000000-0" />
              </div>
            </div>
            <div className="col-xs-12 col-lg-12">
              <div className="block-input">
                <a className="btn btn-cancel" onClick={this.onCloseModal}>Cancelar</a>
                <button className="btn btn-primary" type="submit">Crear</button>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default CreateRequest;
