import React from 'react';

export default ({ selectedBook }) => {
  return (
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          {!selectedBook ? (
            'No Book Selected'
          ) : (
            <div>
              <span className="card-title">
                <h4>{selectedBook.title}</h4>
              </span>
              <div className="divider" />
              <h5>Comments</h5>
              {selectedBook.comments.length > 0 ? (
                <ul>
                  {selectedBook.comments.map((comment, i) => (
                    <li key={`comment-${i}`}>- {comment}</li>
                  ))}
                </ul>
              ) : (
                'No Comments'
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
