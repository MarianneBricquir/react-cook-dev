import React from 'react';

const Card = ({ meal }) => {
    return (
        <div>
            <div className="meal-card">
                <h2 className="h-meal">{meal.strMeal}</h2>
                <p className="p-origin">Origin : {meal.strArea}</p>
                <img className="img-meal" src={meal.strMealThumb} alt={"photo " + meal.strMeal} />
                <p className="p-instructions">{meal.strInstructions}</p>
            </div>
        </div>
    );
};

export default Card;