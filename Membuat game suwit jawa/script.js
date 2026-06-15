function getPilComp() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
    console.log(comp);
}

function getHasil(comp, player) {
    if (player === comp) return 'SERI';
    if (player === 'gajah') return (comp === 'orang') ? 'MENANG' : 'KALAH';
    if (player === 'orang') return (comp === 'gajah') ? 'KALAH' : 'MENANG';
    if (player === 'semut') return (comp === 'orang') ?
    'KALAH' : 'MENANG';
}

function putar() {
    const imgComputer = document.querySelector('.img-comp');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        if ( i >= gambar.length) i = 0;
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
    }, 100);
};


const pilImage = document.querySelectorAll('li img');
pilImage.forEach(function(pil) {
    pil.addEventListener('click', function() {
            const pilComp = getPilComp();
            const pilPlayer = pil.className;
            const hasil = getHasil(pilComp, pilPlayer);

            putar();

            setTimeout(() => {
                const imgComputer = document.querySelector('.img-comp');
                imgComputer.setAttribute('src', 'img/' + pilComp + '.png');

                const infoHasil = document.querySelector('.hasil');
                infoHasil.textContent = hasil;
                }, 1000);
    });
});
