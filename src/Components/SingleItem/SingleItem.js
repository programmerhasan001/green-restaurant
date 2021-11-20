import React from 'react';
import './SingleItem.css'

const SingleItem = (props) => {
    const { strMeal, strInstructions, strMealThumb } = props.meal;
    const { handleAddToCart, meal } = props;
    return (
        <div className="mealCart">
            <img src={strMealThumb} alt="mealsImg" />
            <h3 className="mealName">{strMeal}</h3>
            <p>
                {strInstructions.slice(0, 100)}
                <strong className="readMore"><a href="/home">Read-more</a></strong>
            </p>
            <button className="addToCartBtn" onClick={() => handleAddToCart(meal)}>Add to Cart</button>
        </div>
    );
};

export default SingleItem;