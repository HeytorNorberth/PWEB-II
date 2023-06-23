const pontos = document.getElementsByClassName('ponto')

Array.from(pontos).forEach(ponto => {
    ponto.addEventListener('mouseenter', function (evento) {
        console.log('mouse enter')
        // evento.target.style.backgroundColor = 'blue';
    });

    ponto.addEventListener('mouseleave', function (evento) {
        console.log('mouse leave')
        // evento.target.style.backgroundColor = 'white';
    });
});

