import React, { Component } from 'react';

export default class Reviews extends Component {
  render() {
    const { reviews } = this.props;
    return (
      <div>
        {reviews.map((review) => (
          <div key={review.id}>
            <div>{review.title}</div>
            <div>{review.content}</div>
          </div>
        ))}
      </div>
    );
  }
}
