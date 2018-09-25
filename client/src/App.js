import React, { Component } from 'react';
import './App.css';

import AllBooks from './components/AllBooks';
import Navbar from './components/Navbar';
import SelectedBook from './components/SelectedBook';
import { Consumer } from './context';

class App extends Component {
  render() {
    return (
      <Consumer>
        {values => (
          <main>
            <Navbar />
            <div className="container row">
              <AllBooks values={values} />
              <SelectedBook selectedBook={values.selectedBook} />
            </div>
          </main>
        )}
      </Consumer>
    );
  }
}

export default App;
