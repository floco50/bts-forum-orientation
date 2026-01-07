const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');
const logo = document.getElementById('logo-ndlp');

// Chemins des logos
const logoClair = "assets/img/logos/college-lycee-notre-dame-providence-avranches-logo-couleur.png";
const logoSombre = "assets/img/logos/college-lycee-notre-dame-providence-avranches-logo-couleur-blanc.png";

// Fonction pour appliquer le thème
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
        logo.src = logoSombre;
    } else {
        body.classList.remove('dark-mode');
        icon.classList.replace('fa-sun', 'fa-moon');
        logo.src = logoClair;
    }
}

// Vérifier la préférence enregistrée au chargement
const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    const newTheme = isDark ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});