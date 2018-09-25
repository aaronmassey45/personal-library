import React, { Component } from 'react';
import './App.css';

import AllBooks from './components/AllBooks';
import Navbar from './components/Navbar';
import { Consumer } from './context';

class App extends Component {
  render() {
    return (
      <Consumer>
        {values => (
          <main>
            <Navbar />
            <div className="container">
              <AllBooks values={values} />
            </div>
          </main>
        )}
      </Consumer>
    );
  }
}

export default App;
