document.querySelector('#scrollbtn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.news').scrollIntoView({ behavior: 'smooth' });
});