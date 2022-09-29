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

            if (window.innerWidth > 500) {
                setToggleMenu(false)
            }
        }

        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <div className="navigation">

            {
                (toggleMenu || largeur > 500) && (
                    <ul className="liste">
                        <NavLink to="/accueil" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li className="items items--1">Accueil</li>
                        </NavLink>
                        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li className="items items--2">A propos</li>
                        </NavLink>
                        <Logo />
                    </ul>
                )
            }

            <button onClick={toggleNavSmallScreen} className="btn">Menu</button>
        </div>


    );
};

export default Navbar;