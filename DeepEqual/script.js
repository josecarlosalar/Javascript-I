// APARTADO A

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };
var arr = [];

console.log(user === clonedUser); // false

function isEqual(a, b) {

    for (let prop in a) {
        if ((b.hasOwnProperty(prop)) && a[prop] == b[prop]) arr.push(true);
    }
    if (arr.length == Object.keys(a).length) {
        return true;
    } else {
        return false;
    }

}

console.log(isEqual(user, clonedUser)); // true

//-----------------------------------------------------------------------------

// APARTADO B

var user = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
};
var clonedUser = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
};

var arr2 = [];

/* En la siguiente función primero detectamos que tipo de objeto son obj1 y obj2 (Array o Object) y luego 
validamos en profundo si son iguales o no.
*/

function compararValores(obj1, obj2) {
    let elementosObj1 = 0;
    let elementosObj2 = 0;

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        elementosObj1 = obj1.length;
        elementosObj2 = obj2.length;
        if (elementosObj1 == elementosObj2) {
            for (let i = 0; i < elementosObj1; i++) {
                if (obj1[i] == obj2[i]) {
                    return true;
                } else {
                    return false;
                }
            }
        } else return false;
    } else {
        elementosObj1 = Object.keys(obj1).length;
        elementosObj2 = Object.keys(obj2).length;
        let arr3 = [];
        if (elementosObj1 == elementosObj2) {
            for (let i = 0; i < elementosObj1; i++) {
                if (Object.keys(obj1)[i] == Object.keys(obj2)[i] && Object.values(obj1)[i] == Object.values(obj2)[i]) {
                    arr3.push(true);
                }
            }
            if (arr3.length == elementosObj1) {
                return true;
            } else {
                return false;
            }
        } else return false;
    }
}

function isDeepEqual(a, b) {
    let mismoValor = false;
    for (let prop in a) {
        if ((b.hasOwnProperty(prop)) && typeof(a[prop]) == typeof(b[prop])) {
            if ((typeof(a[prop])) == "object") {
                mismoValor = compararValores(a[prop], b[prop]);
            } else {
                if (a[prop] == b[prop]) {
                    mismoValor = true;
                } else {
                    mismoValor = false;
                }
            }
        }
        arr2.push(mismoValor);
    }
    for (let el of arr2) {
        if (el == false) {
            return false;
        }
    }
    return true;
}


console.log(isDeepEqual(user, clonedUser)); // true