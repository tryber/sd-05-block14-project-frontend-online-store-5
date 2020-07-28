import React from 'react';

class Button extends React.Component {

  render() {
    const { testId, addCart, produto } = this.props;
    return (
      <div>
        <button type="button" data-testid={testId} onClick={() => addCart(produto)}>
          Adicionar Produto
        </button>
      </div>
    );
  }
}

export default Button;
