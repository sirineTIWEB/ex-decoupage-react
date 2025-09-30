import Image from './Image'
import Tag from './Tag'
import Date from '/Date'

function Article({category, date}) {

    return (
        <article class="post-card">
            <Image url={url} />
            <div class="post-content">
                <Tag classe="post-category" titre={category} />
                <h3 class="post-title">{titre}</h3>
                <Date type="post-date" valeur={date}/>
            </div>
        </article>
    )
}

export default Article;