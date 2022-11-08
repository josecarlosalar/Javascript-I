function values(obj) {
    let arr = [];
    for (let props in obj) {
        arr.push(obj[props]);
    }
    console.log(arr);
}

// Ejemplo:
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]