//APARTADO A


function f() {
    console.log(a);
    console.log(g());

    var a = "good job!";

    function g() {
        return a;
    }
    console.log(a);
}

//f();

/* 
El resultado es: undefined, undefined, googjob!
Debido al Hoisting, Javascript declara primero las variables y una vez que escanea todo el código les va asignando sus valores conforme va leyendo el código.
Es por ello que las dos impresiones por consola de 'a' salen como undefined porque estan declaradas pero sin asignación de valor.
*/

// El código equivalente sería. Cambio 'f' por 'g'

function g() {
    var a;

    console.log(a);
    console.log(g());

    a = "good job!";

    function g() {
        return a;
    }
    console.log(a);
}

//g();


// -----------------------------------------------------------------------------------

// APARTADO B

var a = 1;

(function() {
    console.log(a);
    var a = 2;
    b = 4;
    var c = 3;
})();

console.log(a);
console.log(b);
console.log(c);


/*

En este apartado debido al Hoisting, en el primer escaneo que realiza Javascript sobre el código declara arriba del todo
en el objeto global la variable 'a' sin asignar valor. Tambien ejecuta la función autoinvocada. 
El primer valor que imprime por pantalla es undefined que corresponde al console.log(a) de la función autoinvocada.
Dentro de dicha función 'a' está asignando el valor después de hacer la impresión por consola. Aunque Javascript la declare al comienzo de 
su función no es hasta después cuando le asigna el valor de 2.
La segunda impresión por consola es 1 que corresponde al console.log(a) que está en el ámbito global y en el cuál 'a'
está declarada asignando el valor de 1 antes de realizar la impresión por pantalla.
La tercera impresión por consola es 4 que corresponde al console.log(b) de ámbito global. La asignación de 4 a 'b' se realiza dentro de la función autoinvocada pero como 
no está declarada dentro de esta, Javascript la declara en el objeto Global por lo que desde fuera de la función se puede acceder a ella.
La cuarta impresión por consola da error por no estar definido 'c'. La declaración de 'c' está dentro del ámbito de la función autoinvocada
y por ello cuando queremos hacer impresión por pantalla desde el objeto global Javascript no la encuentra.

 
 */


// El código equivalente sería:

// APARTADO B EQUIVALENTE

var a;
var b;

(function() {
    var a;
    var c;
    console.log(a);
    a = 2;
    b = 4;
    c = 3;
})();

a = 1;

// console.log(a);
// console.log(b);
// console.log(c);


//APARTADO C

//h();
var a = 1;

function h() {
    console.log(a);
    b = 4;
    var c = 3;
}

console.log(a);
console.log(b);
console.log(c);


/* Obtenemos las mismas impresiones por pantalla que en el apartado B ya que en vez de ser función autoinvocada
se está realizando la invocación antes de que 'a' puede ser asignada a 1. El resto de impresiones por consola obtienen
los mismos resultados que en el apartado B.
*/

// El código equivalente sería:

//APARTADO C EQUIVALENTE

var a;

function i() {
    var c;
    console.log(a);
    b = 4;
    c = 3;
}

i();

a = 1;

console.log(a);
console.log(b);
console.log(c);