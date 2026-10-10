document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    overlay.addEventListener('click', () => {
        toggleMenu();
    });

    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !hamburger.contains(e.target)) {
            toggleMenu();
        }
    });
});
