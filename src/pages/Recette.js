import React from 'react';
import Navbar from '../components/Navbar';
import Meal from '../components/Meal';

const Recette = () => {
    return (
        <div>
            <Navbar />
            <h1>Recherchez de délicieuses recettes</h1>
            <Meal />
        </div>
    );
};

export default Recette;