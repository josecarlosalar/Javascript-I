Apartado A
Suponiendo objetos sin anidamiento y con propiedades primitivas, construye una función que compare el contenido de 2 objetos.

TIP: Recuerda, los objetos tienen un método hasOwnProperty que nos indica si dicho objeto tiene o no una propiedad concreta. Ejemplo a.hasOwnProperty("name"), si a tiene una propiedad name nos devolverá true, en caso contrario false.


Apartado B
Vamos a mejorar la solución del apartado A suponiendo ahora que si puede existir anidamiento de objetos.

TIP: Recuerda que el operador typeof en Javascript nos devuelve un string indicando el tipo de una variable de entre tipos primitivos, objetos o funciones. Ejemplo, typeof 12 // "number" o typeof {} // "object".