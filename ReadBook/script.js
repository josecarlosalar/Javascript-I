function isBookRead(books, titleToSearch) {
    titleBooks = [];
    readBooks = [];
    books.forEach(element => {
        titleBooks.push(element.title);
        readBooks.push(element.isRead);
    });
    const leido = (titleBooks.indexOf(titleToSearch) === -1) ? false : readBooks[titleBooks.indexOf(titleToSearch)];
    return leido;
}

// Ejemplo:
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false