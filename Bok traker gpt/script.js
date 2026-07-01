// Tangkap

const inputText = document.getElementById('inputText');
const addBtn = document.getElementById('addBtn');

let books = [];

addBtn.addEventListener('click', function() {

    const inputTextValue = inputText.value;

    let toUpper = inputTextValue.toUpperCase();

    if (inputTextValue.trim() === '') {
        alert('Gaboleh kosong lah bang!!!')
    } else {

        if (books.includes(toUpper)) {
                alert('Buku sudah dimasukkan di list');
            } else {

                books.push(inputTextValue.toUpperCase());

                const inputTextNode = document.createTextNode(inputTextValue);
                const liBaru = document.createElement('li');
                const listBookBox = document.getElementById('listBookBox');
        
                liBaru.appendChild(inputTextNode);
                listBookBox.appendChild(liBaru);
                
                inputText.value = '';
            }
        
    }
});

