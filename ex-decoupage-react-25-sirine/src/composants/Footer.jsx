// structure non générale pour en créer un composant, inintérêt de crée composant lien car cela tient sur une ligne.

function Footer() {
    return (
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>À propos</h3>
                    <ul>
                        <li><a href="#">Notre mission</a></li>
                        <li><a href="#">L'équipe</a></li>
                        <li><a href="#">Carrières</a></li>
                        <li><a href="#">Presse</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Ressources</h3>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Tutoriels</a></li>
                        <li><a href="#">API</a></li>
                        <li><a href="#">Open Source</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Communauté</h3>
                    <ul>
                        <li><a href="#">Forum</a></li>
                        <li><a href="#">Discord</a></li>
                        <li><a href="#">Meetups</a></li>
                        <li><a href="#">Contribuer</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Suivez-nous</h3>
                    <div class="social-links">
                        <div class="social-icon">f</div>
                        <div class="social-icon">t</div>
                        <div class="social-icon">in</div>
                        <div class="social-icon">gh</div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2024 TechMag. Tous droits réservés. | Mentions légales | Politique de confidentialité</p>
            </div>
        </footer>
    )
}

export default Footer