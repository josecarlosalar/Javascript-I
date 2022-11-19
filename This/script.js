var surname = "Pérez";
var person = {
    name: "Juan",
    surname: "González",
    wife: {
        name: "Ana",
        surname: "Jiménez",
        getSurname: function() {
            return this.surname;
        },
    },
};

console.log(person.wife.getSurname()); // Retorna "Jiménez" porque quien invoca la función es 'wife' el cual dispone de una variable 'surname = Jiménez' 
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction()); // Retorna "Pérez" porque surnameFunction" está declarada con 'var' y esto hace que sea una variable de ambito global por lo que el objeto 'this' en este caso es el objeto global ya que es quien invoca la función 'getSurname' 
console.log(surnameFunction.call(person)); // Retorna "González porque en este caso 'surnameFuction' está forzando a que quien invoca la función sea el objeto 'person' el cuen contiene una variable 'surname = González'