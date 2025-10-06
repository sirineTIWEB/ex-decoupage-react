// structure non générale pour en créer un composant, inintérêt de crée composant lien car cela tient sur une ligne.
import { footerColumns } from "../data"
import { siteInfo } from "../data"
import { socialLinks } from "../data"


function Footer() {
    return (
        <footer class="footer">
            <div class="footer-content">
                {footerColumns.map((col, index) => (
                    <div class="footer-column" key={index}>
                        <h3>{col.title}</h3>
                        <ul>
                            {col.links.map((lien, index) => (
                                <li><a href={lien.href} key={index}>{lien.label}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div class="footer-column">
                <h3>Suivez-nous</h3>
                <div class="social-links">
                    {socialLinks.map((social) => (
                        <div class="social-icon" key={social.id}>f</div>
                    ))}
                    <div class="social-icon">t</div>
                    <div class="social-icon">in</div>
                    <div class="social-icon">gh</div>
                </div>
            </div>
            </div>
            <div class="footer-bottom">
                <p>{siteInfo.footer.copyright}</p>
                <ul>
                    {siteInfo.footer.legalLinks.map((lien, index) => (
                        <li><a href={lien.href}>{lien.label}</a></li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer