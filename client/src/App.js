import React, { Component } from 'react';
import './App.css';

import AllBooks from './components/AllBooks';
import { Consumer } from './context';

class App extends Component {
  render() {
    return (
      <Consumer>
        {values => (
          <div className="container">
            <AllBooks values={values} />
          </div>
        )}
      </Consumer>
    );
  }
}

export default App;
