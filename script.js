function changeLocation(city) {
    let mapIframe;
    
    // Remplacer les liens par les Google Maps embed des différents Burger King
    switch (city) {
      case 'Liévin':
        mapIframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.9455995342178!2d2.7754823768279997!3d50.42348518930474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd3a721fbbd5b3%3A0xaebe23f0ddebcd90!2sBurger%20King!5e0!3m2!1sfr!2sfr!4v1747054049710!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        break;
      case 'Béthune':
        mapIframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.477009865298!2d2.6242011768327442!3d50.52529718197149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd228a874358f7%3A0x28cb17a95bd31f4a!2sBurger%20King!5e0!3m2!1sfr!2sfr!4v1747054273883!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        break;
      case 'Noeux-les-mines':
        mapIframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10156.433096251985!2d2.6646985871582025!3d50.476327999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd3d00653f5723%3A0xc38105a96afe7921!2sBurger%20King!5e0!3m2!1sfr!2sfr!4v1747054400595!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        break;
      default:
        mapIframe = '<p>Ville non disponible</p>';
    }
  
    // Afficher la carte choisie dans le div
    document.getElementById('map-display').innerHTML = mapIframe;
  }
  



  // Menu Burger
  document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.menuBurger');
    const navLinks = document.querySelector('ul');
    const arrow = document.querySelector('.arrowIcon');
    const links = navLinks.querySelectorAll('a'); // Sélectionne tous les liens dans le menu

    // Fonction pour fermer le menu burger
    function closeMenu() {
        burgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
    }

    // Fonction pour vérifier si l'on est sur la page 'apropos.html'
    function isOnAproposPage() {
        return window.location.pathname.includes('apropos.html');
    }

    // Gestion du clic sur le menu burger
    burgerMenu.addEventListener("click", function () {
        this.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Gestion du clic sur la flèche
    arrow.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Gestion du clic sur les liens du menu, uniquement sur 'apropos.html'
    if (isOnAproposPage()) {
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                closeMenu(); // Ferme le menu burger lorsque l'un des liens est cliqué
            });
        });
    }
    
});