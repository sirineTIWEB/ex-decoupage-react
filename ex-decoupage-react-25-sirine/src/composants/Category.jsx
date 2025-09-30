import Tag from './Tag'

function Category({nom, count}){

    return(
        <div class="category-item">
                <span class="category-name">{nom}</span>
                <Tag classe="category-count" titre={count} />
        </div>
    )
}

export default Category;