function f(input) {
    var result = (input === undefined) ? "Unknown" : (input === null) ? '' : input;
    return result;
}
console.log(f(undefined));