import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Meal = () => {

    const [mealsData, setMealsData] = useState([]);

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
            .then((res) => setMealsData(res.data.meals))

    }, [])


    return (
        <div className="app-meal-container">
            <input className="search-bar" type="text" placeholder="Taper le nom d'un ingrédient (en anglais)"></input>
            <div className="meals-container">
                {
                    mealsData.map((meal) =>
                        <Card key={meal.idMeal} meal={meal} />
                    )

                }
            </div>

        </div>
    );
};

export default Meal;