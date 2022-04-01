import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditional rendering options
    // 1. Element variable
    // 2. Ternary operator condition ? true : false
    // 3. && operator (Shorthand)

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
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Three items for gift</p>
            </div>}
            {command}
            {cart.length !==4 ? <p>Keep Adding</p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;