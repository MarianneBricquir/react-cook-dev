import React from "react";
import { NavLink } from "react-router-dom";


const Home = () => {
    return (
        <div className="home-container">
            <div className="home-intro">
                <h1 classname="home-intro__title">Bienvenue sur ma première application React</h1>
                <div className="p-home">
                    <p>Elle permet d'accèder à des recettes de cuisine du monde !</p>
                    <p>Ces recettes sont issues de l'API publique TheMealDB.</p>
                    <NavLink to="/recette" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <button className="btn-intro">C'est par ici !</button>
                    </NavLink>
                    <p>Si comme moi, vous voulez vous entraîner au développement web avec React, je vous partage une liste d'API publiques <a href="https://github.com/toddmotto/public-apis" target="_blank" >ici</a>   👀</p>
                </div>
            </div>
            <div className="home-links">
                <div className="home-links__meals">
                </div>
                <div className="home-links__cocktails">
                </div>

            </div>
        </div >
    );
};

export default Home;