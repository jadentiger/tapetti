document.getElementById('contactForm').addEventListener('submit', function (event) {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;


    if (!email.includes('@')) {
        alert('Anna voimassa oleva sähköpostiosoite.');
        event.preventDefault();
        return;
    }


    if (message.trim() === '') {
        alert('Kirjoita viesti.');
        event.preventDefault();
        return;
    }
});
