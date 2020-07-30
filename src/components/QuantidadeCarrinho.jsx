import React, { Component } from 'react';

export default class CartItemQnt extends Component {
  constructor(props) {
    super(props);
    const { qnt } = this.props;
    this.state = { qnt: qnt || 1 };
  }

  increase() {
    const { qnt } = this.state;
    const { max, inc } = this.props;
    if (qnt < max) {
      this.setState({ qnt: qnt + 1 });
      inc();
    }
  }

  decrease() {
    const { dec } = this.props;
    const { qnt } = this.state;
    if (qnt > 0) {
      this.setState({ qnt: qnt - 1 });
      dec();
    }
  }

  render() {
    const { qnt } = this.state;
    return (
      <div>
        <button
          onClick={() => this.decrease()}
          type="button"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <div data-testid="shopping-cart-product-quantity">{qnt}</div>
        <button
          onClick={() => this.increase()}
          type="button"
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </div>
    );
  }
}
