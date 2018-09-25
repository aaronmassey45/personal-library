import React, { Component } from 'react';
import axios from 'axios';

import withGetBooks from '../HOC/withGetBooks';
import { Consumer, selectBook } from '../context';

class AddComment extends Component {
  state = {
    comment: '',
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = async (e, dispatch) => {
    e.preventDefault();
    const { id, getBooks } = this.props;
    try {
      await axios.post(`/api/books/${id}`, {
        comment: this.state.comment,
      });
      selectBook(dispatch, id);
      getBooks();
      this.setState({ comment: '' });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Consumer>
        {({ dispatch }) => (
          <div className="card-action">
            <form onSubmit={e => this.handleSubmit(e, dispatch)}>
              <input
                name="title"
                onChange={this.handleChange}
                placeholder="Add a comment..."
                type="text"
                value={this.state.comment}
              />
              <button type="submit" className="btn waves-effect waves-light">
                Add Comment
              </button>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default withGetBooks(AddComment);
