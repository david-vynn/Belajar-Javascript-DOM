
const close = document.querySelectorAll('.close');

// for (let i = 0; close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none'
//         console.log(e.target)
//     })
// }

close.forEach(function(e) {
    e.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    })
})

const nama = document.querySelector('.nama');
console.log(nama);
console.log(nama.nextElementSibling);

