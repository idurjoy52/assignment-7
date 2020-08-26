import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const carts = props.cart;
    const totalPrice = carts.reduce((total,cart) => total+cart.price,0);
    return (
        <div className="enroll-details">
            <h2 className="heading">Order Summary</h2>
            <div className="course-name"> 
                <h4>Courses You Enrolled:</h4>
                <ol>
                {
                    carts.map(cart => <li>{cart.name}</li>)
                }
                </ol>
            </div> 
            <h4>Total Enrolled Course: <small>{carts.length}</small></h4>
            <h3 id="total-price">Total Price: <small>${Number(totalPrice.toFixed(2))}</small></h3>
            <button className="review-button">Review Your Order</button>
            
        </div>
    );
};

export default Cart;