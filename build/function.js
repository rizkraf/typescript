"use strict";
// tipe data pada balikan function
function getName() {
    return "Hello, my name is Rizky";
}
console.log(getName());
function getAge() {
    return 19;
}
function printName() {
    console.log("print name");
}
printName();
// argument type
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(20, 5);
console.log(result);
const add = (val1, val2) => {
    return val1 + val2;
};
// default parameter
const fullName = (first, last = "Azhara") => {
    return first + " " + last;
};
console.log(fullName("Rizky"));
// optional parameter
const getUmur = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(getUmur("a"));
