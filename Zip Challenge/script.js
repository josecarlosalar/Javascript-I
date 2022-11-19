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