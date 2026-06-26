// const books = [
//     'Clean Code',
//     'Atomic Hsbits',
//     'Deep Work'
// ]

// const hasil1 = books.find(element => element === 'Clean Code');

// console.log(hasil1);

// const hasil2 = books.findIndex(function(element, index) {
//     if (element === 'Clean Code') {
//         console.log(index);
//     };
// });

// const numbers = [1,3,5,6,7];

// const hasil3 = numbers.some(element => element % 2 === 0);

// console.log(hasil3);

// const numbers = [2,4,6,8];

// const hasil4 = numbers.every(element => element % 2 === 0);

// console.log(hasil4);

// const hasil5 = books.includes('Clean Code');

// console.log(hasil5);

const books = [
    {
        title: "Clean Code",
        done: true
    },
    {
        title: "Atomic Habits",
        done: false
    },
    {
        title: "Deep Work",
        done: true
    }
];

hasil6 = books.some(element => element.done === true);

console.log(hasil6);

hasil7 = books.every(element => element.done === true);

console.log(hasil7);

// hasil8 = books.find(element => element === 'Atomic Habits', return element);

// console.log(hasil8);

books.push(function(element) {
    books.includes(element => element)
});