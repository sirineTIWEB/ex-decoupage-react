import Input from '../atomiques/Input'
import Bouton from '../atomiques/Bouton'
import { siteInfo } from '../../data'

function Form() {

    return (
        <form class="newsletter-form">
            <Input type="email" classe="email-input" placeholder={siteInfo.newsletter.placeholder} />
            <Bouton type="submit" classe="subscribe-btn"  valeur={siteInfo.newsletter.buttonText}/>
        </form>
    )
}

export default Form