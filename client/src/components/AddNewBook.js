import React, { Component } from 'react';

import mapDispatchToProps from '../HOC/mapDispatchToProps';
import { addNewBook } from '../actions';

class AddNewBook extends Component {
  state = {
    title: '',
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(addNewBook(this.state.title));
    this.setState({ title: '' });
  };

  render() {
    return (
      <div>
        <h6>
          <b>Add to the book shelf!</b>
        </h6>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            placeholder="Enter book title..."
            onChange={this.handleChange}
            name="title"
          />
          <button type="submit" className="btn waves-effect waves-light">
            Add Book
          </button>
        </form>
      </div>
    );
  }
}

export default mapDispatchToProps(AddNewBook);
