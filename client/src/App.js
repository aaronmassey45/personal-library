import React, { Component } from 'react';
import './App.css';

import AllBooks from './components/AllBooks';
import { Consumer } from './context';

class App extends Component {
  render() {
    return (
      <Consumer>
        {value => (
          <div className="container">
            <AllBooks books={value.books} />
          </div>
        )}
      </Consumer>
    );
  }
}

export default App;
