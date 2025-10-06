import Category from "./moleculaires/Category"
import { categories } from "../data";


function CategorieSec(){

    // const data = [
    //     { nom: 'Développement Web', count: '45'},
    //     { nom: 'Intelligence Artificielle', count: '32'},
    //     { nom: 'Cybersécurité', count: '28'},
    //     { nom: 'Cloud Computing', count: '21'},
    //     { nom: 'Mobile', count: '19'}
        
    // ];

    return(
        <section class="categories-section">
        <div class="categories-list">
            <h2 class="categories-title">Catégories Populaires</h2>
            {categories.map((category,index) => (
            <Category key={index} nom={category.name} count={category.count} />
        ))}
        </div>
    </section>
    )
}

export default CategorieSec