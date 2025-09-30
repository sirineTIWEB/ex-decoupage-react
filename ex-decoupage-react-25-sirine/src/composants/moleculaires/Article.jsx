import Image from '../atomiques/Image'
import Tag from '../atomiques/Tag'
import Date from '../atomiques/Date'

function Article({category, date, url, titre}) {

    return (
        <article class="post-card">
            <Image url={url} type="post-image" />
            <div class="post-content">
                <Tag classe="post-category" titre={category} />
                <h3 class="post-title">{titre}</h3>
                <Date type="post-date" valeur={date}/>
            </div>
        </article>
    )
}

export default Article;