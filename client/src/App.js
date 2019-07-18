import React, { PureComponent, Fragment } from 'react';
import './App.css';

import AllBooks from './components/AllBooks';
import Navbar from './components/Navbar';
import SelectedBook from './components/SelectedBook';
import Footer from './components/Footer';
import { Consumer } from './context';
import { getBooks } from './actions';
import mapDisptachToProps from './HOC/mapDispatchToProps';

class App extends PureComponent {
  componentDidMount() {
    this.props.dispatch(getBooks());
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <Consumer>
          {values => (
            <main>
              <div className="container row">
                <AllBooks books={values.books} />
                <SelectedBook selectedBook={values.selectedBook} />
              </div>
            </main>
          )}
        </Consumer>
        <Footer />
      </Fragment>
    );
  }
}

export default mapDisptachToProps(App);
