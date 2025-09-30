import Form from './moleculaires/Form'

function NewsletterSec() {
    return (
        <section class="newsletter-section">
            <div class="newsletter-content">
                <h2 class="newsletter-title">Restez informé</h2>
                <p class="newsletter-description">
                    Recevez les dernières actualités tech directement dans votre boîte mail
                </p>
                <Form />
            </div>
        </section>
    )
}

export default NewsletterSec