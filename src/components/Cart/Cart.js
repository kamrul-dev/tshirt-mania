import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditional rendering options
    // 1. Element variable

    let command;
    if(cart.length === 0){
        command = <div>
            <h5>Spend Money</h5>
            <p>Buy some items</p>
        </div>
    }
    else if(cart.length === 1){
        command = <p>Please add more..</p>
    }
    else{
        command = <p><small>Thansks for adding item</small></p>
    }
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)} >X</button>
                </p>)
            }
            {command}
        </div>
    );
};

export default Cart;