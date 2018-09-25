import React, { Component } from 'react';
import axios from 'axios';

export default class AddNewBook extends Component {
  state = {
    title: '',
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/books', { title: this.state.title });
      this.props.getBooks();
      this.setState({ title: '' });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h6>Add a new book to your library!</h6>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
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
