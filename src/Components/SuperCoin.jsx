import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const SuperCoin = () =>{
    const [superCoins, setSuperCoins] = useState(0);
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((acc, curr) => acc + curr.price*curr.quantity, 0);
    

    useEffect(()=>{
        if(totalAmount >= 100 && totalAmount <400){
            setSuperCoins(Math.floor(totalAmount/100)*10);
        }

    },[totalAmount]);

    return(
        <>
         <div className="super-coins" style={{textAlign:'center'}}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
        </div>
        </>
    );
}

export default SuperCoin;