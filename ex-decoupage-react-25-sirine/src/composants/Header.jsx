// Notions : Router, etc pas encore apprise pour l'appliquer -> structure non récupérable = impertinent de découper

function Header(){
    return(
        <header class="header">
        <div class="header-content">
            <div class="logo">
                <div class="logo-icon">TM</div>
                <div class="logo-text">TechMag</div>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><a href="#accueil">Accueil</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="#tutoriels">Tutoriels</a></li>
                    <li><a href="#podcasts">Podcasts</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header