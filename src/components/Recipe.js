import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
let id = "";


const Recipe = () => {

    const [item, setItem] = useState();
    const { recipeId } = useParams();

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeId)
            .then((res) => setItem(res.data.meals[0]))

    }, [item]);

    if (item) {
        const strYoutube = item.strYoutube;
        const str = strYoutube.split("=");
        id = str[str.length - 1];
    }

    return (
        <>
            < Navbar />
            {

                (!item) ? "" : <div className="recipe-content">


                    <div className="recipe-banner">
                        <img className="img-recipe" src={item.strMealThumb} alt={"photo " + item.strMeal} />
                        <div className="recipe-banner__title">
                            <h1 className="recipe-banner__title__name">{item.strMeal}</h1>
                            <h2 className="recipe-banner__title__area">Origine du plat : {item.strArea} Food</h2>
                            <h3 className="recipe-banner__title__category">{item.strCategory}</h3>
                        </div>
                    </div>

                    <div className="recipe-details">
                        <div className="recipe-details__ingredients">
                            <h2>Ingredients</h2>
                            <br />
                            <h4>{item.strIngredient1} : {item.strMeasure1}</h4>
                            <h4>{item.strIngredient2} : {item.strMeasure2}</h4>
                            <h4>{item.strIngredient3} : {item.strMeasure3}</h4>
                            <h4>{item.strIngredient4} : {item.strMeasure4}</h4>
                            <h4>{item.strIngredient5} : {item.strMeasure5}</h4>
                            <h4>{item.strIngredient6} : {item.strMeasure6}</h4>
                            <h4>{item.strIngredient7} : {item.strMeasure7}</h4>
                            <h4>{item.strIngredient8} : {item.strMeasure8}</h4>
                        </div>
                        <div className="recipe-details__instructions">
                            <h2>Instructions</h2><br />
                            <p className="recipe-details__instructions__text">{item.strInstructions}</p>
                            <div className="recipe-video">
                                <div className="recipe-video__text">Suivre la recette en vidéo 👇</div>
                                <iframe className="recipe-video__video" title="recipeVideo"
                                    src={`https://www.youtube.com/embed/${id}`}>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            }
            < Footer />


        </>
    )
}
export default Recipe;