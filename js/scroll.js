window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
});
