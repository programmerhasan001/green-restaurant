import React, { useEffect, useState } from 'react';
import { addToDb, getDb } from '../../localStorage/localStorage';
import Cart from '../Cart/Cart';
import SingleItem from '../SingleItem/SingleItem';
import './Restaurant.css';

const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [cartMeals, setCartMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    useEffect(() => {
        if (meals.length) {
            const savedDb = getDb();
            const savedOrders = [];
            for (const mealsId in savedDb) {
                const addedMeals = meals.find(meal => meal.idMeal === mealsId);
                const quantity = savedDb[mealsId];
                addedMeals.quantity = quantity;
                savedOrders.push(addedMeals);
            }
            setCartMeals(savedOrders);
        }
    }, [meals])
    const handleAddToCart = item => {
        const newMeals = [...cartMeals, item];
        setCartMeals(newMeals);
        addToDb(item.idMeal);
    }
    return (
        <div className="restaurant-container">
            <div className="items">
                {
                    meals.map(meal => <SingleItem
                        key={meal.idMeal}
                        meal={meal}
                        handleAddToCart={handleAddToCart}
                    ></SingleItem>)
                }
            </div>
            <div className="cart">
                <Cart meals={cartMeals}></Cart>
            </div>
        </div>
    );
};

export default Restaurant;