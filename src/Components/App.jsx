import React, { Component } from 'react'
import Logo from './Navbar/Childs/Logo'
import Request from './Request/Request'
import CreateRequest from './Navbar/CreateRequest'
import { Grid, Row, Navbar } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      id: 0
    }
    this.onSend = this.onSend.bind(this);
  }

  onSend = (newRequest) => {
    this.setState((prevState) => ({
      items: prevState.items.concat(newRequest)
    }));
  }

  handleDelete(id){
    this.setState(prevState => ({
        data: prevState.data.filter(el => el !== id )
    }));
  }

  delete(id){
    this.setState(this.item.id)
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Logo />
            <h2 className="boder-left">Solicitudes</h2>
          </Navbar.Header>
          <CreateRequest onSubmit={this.onSend} />
        </Navbar>
        <Grid>
          <Row>
            <Request handleDelete={this.delete.bind(this)} items={this.state.items} />
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App;
