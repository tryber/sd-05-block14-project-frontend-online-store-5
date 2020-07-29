import React, { Component } from 'react';

export default class CartItemQnt extends Component {
  constructor(props) {
    super(props);
    this.state = { qnt: 1 };
  }

  increase() {
    const { qnt } = this.state;
    const { max } = this.props;

    if (qnt < max) this.setState({ qnt: qnt + 1 });
  }

  decrease() {
    const { qnt } = this.state;
    if (qnt > 0) this.setState({ qnt: qnt - 1 });
  }

  render() {
    const { qnt } = this.state;
    const { inc, dec } = this.props;
    return (
      <div>
        <button
          onClick={() => { this.decrease(); dec(); }}
          type="button"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <div data-testid="shopping-cart-product-quantity">{qnt}</div>
        <button
          onClick={() => { this.increase(); inc(); }}
          type="button"
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </div>
    );
  }
}
