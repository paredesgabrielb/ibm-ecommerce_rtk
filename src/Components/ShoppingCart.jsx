import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart,clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice';
import './ShoppingCart.css'; 


const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, current) => total + current.price * current.quantity, 0);

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
            <span>{item.name} - ${item.price}</span>
            <div className="quantity-controls">
                <button className="quantity-control-btn"  onClick={() => handleDecreaseItemQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button className="quantity-control-btn"  onClick={() => handleIncreaseItemQuantity(item.id)}>+</button>
            </div>
            <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </li>
        ))}
      </ul>
      <button className="clear-cart-btn" onClick={handleCleanCart}>Clear Cart</button>
      <div>{totalAmount ? <div>The total amount is {totalAmount}</div> : ''}</div>
    </div>
  
    </>
  );
};

export default ShoppingCart;
