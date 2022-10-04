import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="about-container">
                <h1>A propos de React Cooking</h1>

                <div className="about-text">
                    <p className="p-about">
                        Cette application a été réalisée dans le cadre d'un TP de la formation <a href="https://fromscratch.podia.com/react-de-a-a-z" target="_blank">React De A à Z de From Scratch</a>.
                        Le premier cours est accessible <a href="https://www.youtube.com/watch?v=f0X1Tl8aHtA" target="_blank">ici</a>.
                    </p>

                    <p className="p-about">
                        L'API utilisée est <a href="https://www.themealdb.com/api.php" target="_blank">The Meal DB</a>.
                    </p>

                    <p className="p-about">
                        Je suis également en formation développement web avec OpenClassrooms.
                        Pour visiter mon site internet, <a href="https://mariannebricquir.github.io/site-web/" target="_blank">c'est par ici</a> !
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
