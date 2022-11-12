/*
CALIFICATIONS
Implementa una función que muestre la media de la clase de forma textual, es decir, 
siguiendo el sistema de calificación español:

Matrícula de Honor = 10
Sobresaliente = entre 9 y 10
Notable = entre 7 y 9
Bien = entre 6 y 7
Suficiente = entre 5 y 6
Insuficiente = entre 4 y 5
Muy deficiente = por debajo de 4
*/


const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

function textualNote(note) {

    let text = '';

    if (note == 10) text = "Matrícula de Honor";
    if (note >= 9 && note < 10) text = "Sobresaliente";
    if (note >= 7 && note < 9) text = "Notable";
    if (note >= 6 && note < 7) text = "Bien";
    if (note >= 5 && note < 6) text = "Suficiente";
    if (note >= 4 && note < 5) text = "Insuficiente";
    if (note < 4) text = "Muy Deficiente";

    console.log(text);
}

function printAverage(classResults) {

    const initialValue = 0;
    const totalStudents = Object.keys(classResults).length;
    const propertyValues = Object.values(classResults);

    const half = propertyValues.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );

    textualNote(half / totalStudents);
}

console.log(printAverage(eso2o));