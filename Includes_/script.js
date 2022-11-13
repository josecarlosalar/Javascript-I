function includes(array, value) {
    let incluido = false;
    for (let elem of array) {
        if (elem == value) incluido = true;
    }
    return incluido;
}

// Ejemplo:
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false