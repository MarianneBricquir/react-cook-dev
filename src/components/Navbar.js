import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Logo from './Logo';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if (window.innerWidth > 700) {
                setToggleMenu(false)
            }
        }

        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <header>
            <div className="navigation">
                <Logo />

                {
                    (toggleMenu || largeur > 700) && (

                        <ul className="liste">
                            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                <li className="items items--1">Accueil</li>
                            </NavLink>
                            <NavLink to="/recette" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                <li className="items items--2">Recettes</li>
                            </NavLink>
                            <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                <li className="items items--3">A propos</li>
                            </NavLink>

                        </ul>
                    )
                }

                <button onClick={toggleNavSmallScreen} className="btn">Menu</button>
            </div>
        </header>


    );
};

export default Navbar;