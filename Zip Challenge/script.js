/*

Zip Challenge

Crea una función zipObject tal que acepte un array de claves como primer argumento 
y un array de valores como segundo argumento y cuyo objetivo sea crear un objeto uniendo 
las claves con sus valores. Asumir que el array de claves tiene como mínimo la misma longitud 
que el de valores.

Si no hay valores suficientes para todas las claves evita que aparezcan como undefined.

*/

function zipObject(keys, values) {
    let zipObj = {};
    for (i = 0; i < keys.length; i++) {
        if (values[i] != undefined) zipObj[keys[i]] = values[i];
    }
    return zipObj;
}

// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}
console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}