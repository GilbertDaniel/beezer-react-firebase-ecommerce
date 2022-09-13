import React,{useContext} from 'react';

import Button from '../button/Button';

import './cart-dropdown.styles.scss';
import { CartContext } from './../../context/CartContext';
import CartItem from '../cart-item/CartItem';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};


export default CartDropdown;