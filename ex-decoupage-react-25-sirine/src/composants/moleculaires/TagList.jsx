import Tag from '../atomiques/Tag'

import { popularTags } from '../../data'

function TagList() {

    return (
        <div class="tags-list">
            {popularTags.map((tag,index) => (
            <Tag classe="tag" key={index} titre={tag} />
        ))}
        </div>
    )
}

export default TagList