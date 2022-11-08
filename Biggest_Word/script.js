function biggestWord(phrase) {
    let word = phrase.split(' ');
    let palabraMayor = '';
    for (let words of word) {
        if (palabraMayor.length == 0) palabraMayor = words;
        else if (palabraMayor.length < words.length) palabraMayor = words;
    }
    console.log(palabraMayor);
}

// Ejemplo
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"