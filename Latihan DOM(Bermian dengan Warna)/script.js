const ubahWarna = document.getElementById('tUbahWarna');
// const judul = document.getElementById('judul');

ubahWarna.addEventListener('click', function() {
    // document.body.style.backgroundColor = 'lightblue';
    document.body.classList.toggle('biru-muda')
})


const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');

ubahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+ r +', '+ b +', '+ g +')';
})

// const r = document.querySelector('input[name=sMerah]')
// const g = document.querySelector('input[name=sHijau]')
// const b = document.querySelector('input[name=sBiru]')

const range = document.querySelectorAll('input');

for (let i = 0; i < range.length; i++) {

    range[i].addEventListener('input', function() {
        const r = range[0].value;
        const g = range[1].value;
        const b = range[2].value;

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    });
}

// const range = document.querySelectorAll('input[type="range"]');
// const body = document.body;

// range.forEach(input => {
//   input.addEventListener('input', () => {
//     const color = `rgb(${range[0].value}, ${range[1].value}, ${range[2].value})`;
//     body.style.backgroundColor = color;
//   });
// });

document.body.addEventListener('pointermove', function(e) {
    const xPos = Math.round((e.clientX / window.innerWidth) * 255)
    const yPos = Math.round((e.clientY / window.innerHeight) * 255)

    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`

    console.log(xPos)
});