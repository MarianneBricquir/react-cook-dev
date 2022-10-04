import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Card = ({ meal }) => {

    let navigate = useNavigate();

    return (
        <div>
            <div className="meal-card" onClick={() => navigate(`/${meal.idMeal}`)}>
                <h2 className="h-meal">{meal.strMeal}</h2>
                <p className="p-origin">Origin : {meal.strArea}</p>
                <img className="img-meal" src={meal.strMealThumb} alt={"photo " + meal.strMeal} />
            </div>
        </div>
    );
};

export default Card;