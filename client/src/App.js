import React, { Component, Fragment } from 'react';
import './App.css';

import AllBooks from './components/AllBooks';
import Navbar from './components/Navbar';
import SelectedBook from './components/SelectedBook';
import Footer from './components/Footer';
import { Consumer } from './context';
import { getBooks } from './actions';
import mapDisptachToProps from './HOC/mapDispatchToProps';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getBooks());
  }

  render() {
    return (
      <Consumer>
        {values => (
          <Fragment>
            <main>
              <Navbar />
              <div className="container row">
                <AllBooks values={values} />
                <SelectedBook selectedBook={values.selectedBook} />
              </div>
            </main>
            <Footer />
          </Fragment>
        )}
      </Consumer>
    );
  }
}

export default mapDisptachToProps(App);
