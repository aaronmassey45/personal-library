import React, { Component } from 'react';

import { Consumer, getBooks, addComment } from '../context';

export default class AddComment extends Component {
  state = {
    comment: '',
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = async (e, dispatch) => {
    e.preventDefault();
    const { id } = this.props;
    try {
      addComment(dispatch, this.state.comment, id);
      getBooks(dispatch);
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
