function values(obj) {
    let arr = [];
    for (let props in obj) {
        const isProperty = obj.hasOwnProperty(props);
        if (isProperty === true) arr.push(obj[props]);
    }
    console.log(arr);
}

// Ejemplo:
function Person(name) {
    this.name = name;
}

Person.prototype.walk = function() {
    console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]