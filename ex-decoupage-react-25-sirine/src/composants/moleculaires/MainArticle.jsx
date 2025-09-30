import Image from '../atomiques/Image'
import Tag from '../atomiques/Tag'
import Date from '../atomiques/Date'

function MainArticle({url, alt, category, titre, auteur, durée, date, extrait}){

    return(
        <article class="featured-article">
            <Image type="featured-image" url={url} alt={alt} />
            <div class="featured-content">
                <Tag classe="article-category" titre={category}/>
                <h1 class="article-title">{titre}</h1>
                <div class="article-meta">
                    <div class="author">
                        <div class="author-avatar"></div>
                        <span>{auteur}</span>
                    </div>
                    <span>{durée}</span>
                    <Date valeur={date} />
                </div>
                <p class="article-excerpt">
                    {extrait}
                </p>
                <a href="#" class="read-more-btn">Lire la suite →</a>
            </div>
        </article>
    )
}

export default MainArticle