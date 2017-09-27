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
  }

  onCreate = (newRequest) => {
    this.setState({
      items: this.state.items.concat(newRequest)
    });
  }

  handleDelete = (item) => {
    this.setState({
      items: this.state.items.filter(el => el.id !== item.id )
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Logo />
            <h2 className="boder-left">Solicitudes</h2>
          </Navbar.Header>
          <CreateRequest onCreate={this.onCreate} />
        </Navbar>
        <Grid>
          <Row>
            <Request
              items={this.state.items}
              onDelete={this.handleDelete}
            />
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App;
