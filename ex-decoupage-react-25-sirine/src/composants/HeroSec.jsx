// l'idée pour cette section est que l'article principale puisse être modifié en tout temps.

import MainArticle from "./moleculaires/MainArticle"
// import url from '../assets/images/IA.png'
import { featuredArticle  } from "../data"


function HeroSec(){

    return(
        <section class="hero-section">
            <MainArticle
                url= {featuredArticle.image}
                alt= {featuredArticle.alt}
                category={featuredArticle.category}
                titre={featuredArticle.title}
                auteur={featuredArticle.author.name}
                durée={featuredArticle.readTime}
                date={featuredArticle.date}
                extrait={featuredArticle.excerpt}
            />
        </section>
    )
}

export default HeroSec