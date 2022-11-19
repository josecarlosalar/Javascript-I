/* 
Reverse Text

Dado un texto cualquiera, invierte el orden de las palabras.

TIP: Se hace en 1 sola línea.
Ejemplo: "Uno dos tres" --> "tres dos Uno"

*/


function reverseText(text) {
    return text.split(' ').reverse().join(' ');
}

console.log(reverseText("uno dos tres"));
console.log(reverseText("El mejor master el de Lemoncode"));