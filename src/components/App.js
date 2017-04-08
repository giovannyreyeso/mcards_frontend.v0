import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container cards">
          <div className="row">
              { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
