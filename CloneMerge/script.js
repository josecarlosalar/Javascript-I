function clone(source) {
    const a2 = {...source };
    return a2;
}

function merge(source, target) {
    const c = {...target, ...source };
    return c;

}

// Por ejemplo, dados estos 2 objetos:
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

//El resultado dará la clonación del oblejto a
console.log(clone(a));

// El resultado de mezclar a sobre b sería:
console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}