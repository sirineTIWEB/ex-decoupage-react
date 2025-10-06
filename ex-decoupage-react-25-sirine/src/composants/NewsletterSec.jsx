import Form from './moleculaires/Form'
import { siteInfo } from '../data'

function NewsletterSec() {
    return (
        <section class="newsletter-section">
            <div class="newsletter-content">
                <h2 class="newsletter-title">{siteInfo.newsletter.title}</h2>
                <p class="newsletter-description">
                    {siteInfo.newsletter.description}
                </p>
                <Form />
            </div>
        </section>
    )
}

export default NewsletterSec