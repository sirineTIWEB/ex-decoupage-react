import Input from '../atomiques/Input'
import Bouton from '../atomiques/Bouton'

function Form() {

    return (
        <form class="newsletter-form">
            <Input type="email" classe="email-input" placeholder="Votre email" />
            <Bouton type="submit" classe="subscribe-btn"  valeur="S'inscrire"/>
        </form>
    )
}

export default Form