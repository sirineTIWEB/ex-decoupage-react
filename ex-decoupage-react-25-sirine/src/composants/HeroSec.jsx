// l'idée pour cette section est que l'article principale puisse être modifié en tout temps.

import MainArticle from "./moleculaires/MainArticle"
import url from '../assets/images/IA.png'


function HeroSec(){

    return(
        <section class="hero-section">
            <MainArticle
                url={url}
                alt="Intelligence Artificielle"
                category="Intelligence Artificielle"
                titre="Les dernières avancées en IA générative transforment le développement"
                auteur="Marie Dupont"
                durée="5 min de lecture"
                date="24 Sept 2024"
                extrait="Découvrez comment les nouvelles technologies d'IA révolutionnent notre façon de coder et de créer des applications modernes..."
            />
        </section>
    )
}

export default HeroSec