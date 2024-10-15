import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart,clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice';
import './ShoppingCart.css'; 


const ShoppingCart = () => {
  const dispatch = userDispatch();
  const  cartItems = useSelector(state => state.cart.cartItems);
  let totalAmount = cartItems.reduce((total,current) => total + current.price*current.quantity,0);

  const handleRemoveItem= itemId => {
    dispatch(removeItemFromCart(itemId));
  }

  const handleCleanCart = () => {
    dispatch(clearCart());
  }

  const handleIncreaseItemQuantity = itemId => {
    dispatch(increaseItemQuantity(itemId));
  }

  const handleDecreaseItemQuantity = itemId => {
    dispatch(decreaseItemQuantity(itemId));
  }
  
  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
       {cartItems.map( item =>(
        <li key={item.id} className='cart-item'>
            
        </li>
        ))}
      </ul>
      <button className="clear-cart-btn">Clear Cart</button>
    </div>
  
    </>
  );
};

export default ShoppingCart;
