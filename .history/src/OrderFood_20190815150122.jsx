import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class OrderFood extends Component {

  export default function renderFixedContainer() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Container>
      </React.Fragment>
    );
  }

  render() {
    return (
        <div>          
          this.renderFixedContainer();
        </div>
     
    );
  }
}

export default OrderFood;