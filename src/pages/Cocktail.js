import React from 'react';
import Navbar from '../components/Navbar';
import Meal from '../components/Meal';

const Coktail = () => {
    return (
        <div>
            <Navbar />
            <h1>Recherchez de délicieux cocktail</h1>
            <Meal />
        </div>
    );
};

export default Coktail;