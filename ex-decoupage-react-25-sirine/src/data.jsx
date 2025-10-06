// Import des images depuis assets/images
import iaImage from './assets/images/IA.png';
import reactImage from './assets/images/React.png';
import djangoImage from './assets/images/dja.png';
import dockerImage from './assets/images/docker.png';

// ==========================================
// DONNÉES DE NAVIGATION
// ==========================================
export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Articles", href: "#articles" },
  { label: "Tutoriels", href: "#tutoriels" },
  { label: "Podcasts", href: "#podcasts" },
  { label: "Contact", href: "#contact" },
];

// ==========================================
// ARTICLE PRINCIPAL (FEATURED)
// ==========================================
export const featuredArticle = {
  image: iaImage,
  alt: "Intelligence Artificielle",
  category: "Intelligence Artificielle",
  title: "Les dernières avancées en IA générative transforment le développement",
  author: {
    name: "Marie Dupont",
    avatar: null
  },
  readTime: "5 min de lecture",
  date: "24 Sept 2024",
  excerpt: "Découvrez comment les nouvelles technologies d'IA révolutionnent notre façon de coder et de créer des applications modernes..."
};

// ==========================================
// ARTICLES RÉCENTS
// ==========================================
export const posts = [
  {
    id: 1,
    image: reactImage,
    alt: "React Hooks",
    category: "JavaScript",
    title: "Maîtriser les Hooks React en 2024",
    date: "23 Sept 2024"
  },
  {
    id: 2,
    image: djangoImage,
    alt: "FastAPI vs Django",
    category: "Python",
    title: "FastAPI vs Django : Le guide complet",
    date: "22 Sept 2024"
  },
  {
    id: 3,
    image: dockerImage,
    alt: "Docker et Kubernetes",
    category: "DevOps",
    title: "Docker et Kubernetes pour débutants",
    date: "21 Sept 2024"
  }
];

// ==========================================
// CATÉGORIES
// ==========================================
export const categories = [
  { id: 1, name: "Développement Web", count: 45 },
  { id: 2, name: "Intelligence Artificielle", count: 32 },
  { id: 3, name: "Cybersécurité", count: 28 },
  { id: 4, name: "Cloud Computing", count: 21 },
  { id: 5, name: "Mobile", count: 19 }
];

// ==========================================
// TAGS POPULAIRES
// ==========================================
export const popularTags = [
  "React",
  "Node.js",
  "Python",
  "Docker",
  "TypeScript",
  "GraphQL",
  "MongoDB",
  "AWS",
  "Vue.js",
  "Machine Learning"
];

// ==========================================
// DONNÉES DU FOOTER
// ==========================================
export const footerColumns = [
  {
    title: "À propos",
    links: [
      { label: "Notre mission", href: "#" },
      { label: "L'équipe", href: "#" },
      { label: "Carrières", href: "#" },
      { label: "Presse", href: "#" }
    ]
  },
  {
    title: "Ressources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Tutoriels", href: "#" },
      { label: "API", href: "#" },
      { label: "Open Source", href: "#" }
    ]
  },
  {
    title: "Communauté",
    links: [
      { label: "Forum", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Meetups", href: "#" },
      { label: "Contribuer", href: "#" }
    ]
  }
];

// ==========================================
// RÉSEAUX SOCIAUX
// ==========================================
export const socialLinks = [
  { id: 1, icon: "f", name: "Facebook", href: "#" },
  { id: 2, icon: "t", name: "Twitter", href: "#" },
  { id: 3, icon: "in", name: "LinkedIn", href: "#" },
  { id: 4, icon: "gh", name: "GitHub", href: "#" }
];

// ==========================================
// INFOS DU SITE
// ==========================================
export const siteInfo = {
  logo: {
    icon: "TM",
    text: "TechMag"
  },
  newsletter: {
    title: "Restez informé",
    description: "Recevez les dernières actualités tech directement dans votre boîte mail",
    placeholder: "Votre email",
    buttonText: "S'inscrire"
  },
  footer: {
    copyright: "© 2024 TechMag. Tous droits réservés.",
    legalLinks: [
      { label: "Mentions légales", href: "#" },
      { label: "Politique de confidentialité", href: "#" }
    ]
  }
};
