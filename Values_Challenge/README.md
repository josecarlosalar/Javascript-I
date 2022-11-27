## Challenge

Evita añadir las propiedades heredadas en caso de ser instancia de una clase:

```javascript
// Ejemplo:
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function() {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]
```
