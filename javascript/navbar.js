const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Navbar shrink on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// Smooth scroll and close navbar on link click
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const elementPosition = targetElement.offsetTop - navbarHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }

        // Close the navbar if it’s open (Bootstrap example)
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});
