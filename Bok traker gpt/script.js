// Tangkap 

const inputText = document.getElementById('inputText');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function() {
    const inputTextValue = inputText.value;
    const listBook = document.getElementById('listBook');
    
    if (inputTextValue.trim() === '') {
        alert('Input tidak boleh kosong!!!');
    } else {
        const inputTextNode = document.createTextNode(inputTextValue);

        let books;
        
        if (localStorage.getItem('books')) {
            books = JSON.parse(
                localStorage.getItem('books')
            );
        } else {
            books = [];
        }

        books.push(inputTextValue);
        localStorage.setItem('books',
            JSON.stringify(books)
        );


        const liBaru = document.createElement('li');
        const spanList = document.createElement('span');
        const deleteBtn = document.createElement('button');
        const textDltBtn = document.createTextNode('X');

        deleteBtn.appendChild(textDltBtn);

        spanList.appendChild(inputTextNode);
        liBaru.appendChild(spanList);
        liBaru.appendChild(deleteBtn);
        listBook.appendChild(liBaru);
                
        liBaru.addEventListener('click', function(e) {
            spanList.classList.toggle('done');
            updateDoneBook();
        });
        
        deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.target.parentElement.remove();
            
            updateTotalBook();
            updateDoneBook();
        });

        updateTotalBook();
    }

    function updateTotalBook() {
        const numTotBook = document.getElementById('numTotBook');
        const listBook = document.getElementById('listBook');

        const jumlahList = listBook.children.length;
        
        numTotBook.textContent = jumlahList;
    };

    function updateDoneBook() {
        const numDoneBook = document.getElementById('numDoneBook');
        const listDone = document.querySelectorAll('.done');
        
        const totalListDone = listDone.length;
        
        numDoneBook.textContent = totalListDone;
    };

    inputText.value = '';
});