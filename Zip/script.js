function zipObject(keys, values) {
    let zipObj = {};
    for (i = 0; i < keys.length; i++) {
        zipObj[keys[i]] = values[i];
    }
    return zipObj;
}

// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}