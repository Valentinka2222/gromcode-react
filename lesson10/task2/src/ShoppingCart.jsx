import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
      {
        id: '3',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '4',
        name: 'iPad Pro',
        price: 799,
      },
      {
        id: '5',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '6',
        name: 'iPad Pro',
        price: 799,
      },
      {
        id: '7',
        name: 'iPhone 11',
        price: 999,
      },
    ],
  };
  render() {
    const count = this.state.cartItems.length;
    return (
      <div className="column">
        <CartTitle userName={this.props.userData.firstName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}
export default ShoppingCart;
