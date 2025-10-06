// Notions : Router, etc pas encore apprise pour l'appliquer -> structure non récupérable = impertinent de découper
import { siteInfo } from "../data"
import { navLinks } from "../data"

function Header(){
    return(
        <header class="header">
        <div class="header-content">
            <div class="logo">
                <div class="logo-icon">{siteInfo.logo.icon}</div>
                <div class="logo-text">{siteInfo.logo.text}</div>
            </div>
            <nav class="main-nav">
                <ul>
                    {navLinks.map((lien, index) => (
                        <li><a key={index} href={lien.href}>{lien.label}</a></li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header