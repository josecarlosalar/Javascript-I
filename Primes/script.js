function showPrimes(from, to) {
    let raizCuadrada = 0;
    for (let i = 1; i <= to; i++) {
        raizCuadrada = Math.floor(Math.sqrt(i));
        let primo = "Es primo";
        if (i == 1) primo = "no aplica en los números primos";
        for (j = 1; j <= raizCuadrada; j++) {
            if (i % j == 0 && j != i && j != 1) primo = "No es primo";
        }
        console.log(`El número ${i} ${primo}`);
    }
}

showPrimes(1, 100);