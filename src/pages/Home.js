
import React, { useState } from "react";
//components
import Header from "../components/Header"
import FormationCard from "../components/FormationCard";
import Footer from "../components/Footer";
//images
import womanCorporate from "../images/womanCorporate.jpg"

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue("");
      };


    return (
        <>
        <div className="home-container">
            <div className="header">
                   <Header/>
            </div>
            <div className="main-headline">
                <div>
                    <h1>L'expertise RH <span>à portée de main</span></h1>
                    <p>Boostez vos compétences en gestion des ressources humaines  ! Notre centre Elite RH propose des formations sur mesure pour les Managers RH, afin de les aider à exceller dans leur domaine. Développez vos talents en recrutement, droit du travail, et bien plus encore, pour être un acteur clé dans la réussite de votre entreprise.</p>
                </div>
                <div>
                <img src={womanCorporate} alt="femme souriante devant un écran" className="logo-headline" />
                </div>
            </div>
            <div className="formation-part">
                <div className="title-searchbar">
                    <h2>
                        Nos formations
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        placeholder="Rechercher une formation..."
                        value={inputValue}
                        onChange={handleChange}
                        />
                         <button type="submit">
                        Rechercher
                        </button>
                    </form>
                </div>
                <FormationCard/> 
            </div>
        </div>
         <Footer/>
        </>
       
    )

}

export default Home;