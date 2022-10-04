import React from 'react';
import Navbar from '../components/Navbar';
import Meal from '../components/Meal';
import Footer from '../components/Footer';

const Recette = () => {
    return (
        <div>
            <Navbar />
            <h1>Recherchez de délicieuses recettes</h1>
            <Meal />
            <Footer />
        </div>
    );
};

export default Recette;