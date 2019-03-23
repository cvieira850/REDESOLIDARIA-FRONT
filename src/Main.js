import React, { Component } from 'react';
import Header from './layout/Header';

class Main extends Component {

  render() {
    return (
      <div style={{ paddingBottom: "55px" }}>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
