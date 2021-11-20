import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { meals } = props;
    let totalOrders = 0;
    for (const meal of meals) {
        if (!meal.quantity) {
            meal.quantity = 1;
        }
        totalOrders += meal.quantity;
    }
    return (
        <div className="itemsAdded-cart">
            <p>Items ordered ({totalOrders})</p>
            <h3>Order lists:</h3>
            {
                meals.map(meal => <li key={meal.strMeal} type="1">{meal.strMeal}</li>)
            }
            <button className="addToCartBtn">Review-Orders</button>
        </div>
    );
};

export default Cart;