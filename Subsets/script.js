function subsets(word) {
    let long = word.length;
    let arr = [];
    let cadena = '';
    for (i = 0; i < long - 1; i++) {
        for (j = i + 1; j < long; j++) {
            cadena = cadena + word[j];
        }
        arr.push(cadena);
        cadena = '';
    }
    return arr;

}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]