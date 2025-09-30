import Tag from '../atomiques/Tag'

function TagList() {
    const data = [
        'React',
        'Node.js',
        'Python',
        'Docker',
        'Tpescript',
        'GraphQL',
        'MongoDB',
        'AWS',
        'Vue.js',
        'Machine Learning'
    ]

    return (
        <div class="tags-list">
            {data.map((tag,index => (
            <Tag classe="tag" key={index} titre={tag} />
        )))}
        </div>
    )
}

export default TagList