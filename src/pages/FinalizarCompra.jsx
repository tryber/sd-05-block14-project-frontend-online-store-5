import React, { Component } from 'react';

class FinalizarCompra extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        {cart.map((produto) => (
          <div key={produto.id}>{produto.title}</div>
        ))}
        <form>
          <label htmlFor="nome">Nome Completo</label>
          <input type="text" name="nome" data-testid="checkout-fullname" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" data-testid="checkout-email" />
          <label htmlFor="cpf">CPF</label>
          <input type="text" name="cpf" data-testid="checkout-cpf" />
          <label htmlFor="telefone">Telefone</label>
          <input type="text" name="telefone" data-testid="checkout-phone" />
          <label htmlFor="cep">CEP</label>
          <input type="text" name="cep" data-testid="checkout-cep" />
          <label htmlFor="endereco">Endereço</label>
          <input type="text" name="endereco" data-testid="checkout-address" />
        </form>
      </div>
    );
  }
}

export default FinalizarCompra;
