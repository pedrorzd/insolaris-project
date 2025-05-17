    window.addEventListener('scroll', function () {
    const scrollThreshold = 580; // altura em pixels para mudar
    const appName = document.getElementById('app-name');
    const appLogo = document.getElementById('app-logo');

    if (window.scrollY > scrollThreshold) {
        appName.style.display = 'none';
        appLogo.style.display = 'inline';
    } else {
        appName.style.display = 'inline';
        appLogo.style.display = 'none';
    }
    });

    

    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    });