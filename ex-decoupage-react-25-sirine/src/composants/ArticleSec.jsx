import Article from './moleculaires/Article'
// import dja from '../assets/images/dja.png'
// import docker from '../assets/images/docker.png'
// import react from '../assets/images/React.png'
import { posts } from "../data";

function ArticleSec(){

    // const data = [
    //     // pas de parenthèse à variable de URL car ça rend un obj
    //     { url: react ,category: 'JavaScript', titre: 'Maîtriser les Hooks React en 2024', date: '23 Sept 2024' },
    //     { url: dja ,category: 'Python', titre: 'FastAPI vs Django : Le guide complet', date: '22 Sept 2024' },
    //     { url: docker ,category: 'DevOps', titre: 'Docker et Kubernetes pour débutants', date: '21 Sept 2024' },
    // ];

    return(
        <section class="recent-posts">
        <div class="section-header">
            <h2 class="section-title">Articles Récents</h2>
            <a href="#" class="view-all-link">Voir tous →</a>
        </div>
        <div class="posts-grid">
        {/* bien fermer (article, index) -> pareil pour tout mes autres maps */}
        {posts.map((article, index) => (
            <Article key={index} url={article.image} category={article.category} titre={article.title} date={article.date} />
        ))}
        </div>
    </section>
    )
}

export default ArticleSec