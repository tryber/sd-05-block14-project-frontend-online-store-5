import React, { Component } from 'react';

export default class CartItemQnt extends Component {
  constructor(props) {
    super(props);
    const { qnt } = this.props;
    this.state = { qnt: qnt || 1 };
  }

  increase() {
    const { qnt } = this.state;
    const { max, inc, produto } = this.props;
    if (qnt < max) {
      this.setState({ qnt: Number(qnt) + 1 });
      inc(produto);
    }
  }

  decrease() {
    const { dec, produto } = this.props;
    const { qnt } = this.state;
    if (qnt > 0) {
      this.setState({ qnt: Number(qnt) - 1 });
      dec(produto);
    }
  }

  render() {
    const { qnt } = this.state;
    return (
      <div className="cartQuantity">
        <button
          className="buttonQty"
          onClick={() => this.decrease()}
          type="button"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <div data-testid="shopping-cart-product-quantity">{qnt}</div>
        <button
          className="buttonQty"
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
